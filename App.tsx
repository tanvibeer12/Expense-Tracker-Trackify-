import { useState, useEffect } from 'react';
import { ExpenseForm } from './components/expense-form';
import { ExpenseList } from './components/expense-list';
import { ExpenseStats } from './components/expense-stats';
import { ExpenseCharts } from './components/expense-charts';
import { BudgetTracker } from './components/budget-tracker';
import { SearchAndFilter } from './components/search-filter';
import { ExportData } from './components/export-data';
import { Wallet, BarChart3, DollarSign } from 'lucide-react';

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

export interface Budget {
  category: string;
  limit: number;
}

export default function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: '',
    end: '',
  });
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'charts'>('overview');

  // Load expenses and budgets from localStorage on mount
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    const savedBudgets = localStorage.getItem('budgets');
    
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
    if (savedBudgets) {
      setBudgets(JSON.parse(savedBudgets));
    }
  }, []);

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Save budgets to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    const newExpense: Expense = {
      ...expense,
      id: crypto.randomUUID(),
    };
    setExpenses([newExpense, ...expenses]);
  };

  const updateExpense = (updatedExpense: Expense) => {
    setExpenses(expenses.map(exp => 
      exp.id === updatedExpense.id ? updatedExpense : exp
    ));
    setEditingExpense(null);
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const updateBudget = (category: string, limit: number) => {
    const existingBudget = budgets.find(b => b.category === category);
    
    if (existingBudget) {
      setBudgets(budgets.map(b => 
        b.category === category ? { ...b, limit } : b
      ));
    } else {
      setBudgets([...budgets, { category, limit }]);
    }
  };

  const deleteBudget = (category: string) => {
    setBudgets(budgets.filter(b => b.category !== category));
  };

  // Apply filters
  let filteredExpenses = expenses;

  // Filter by category
  if (filterCategory !== 'all') {
    filteredExpenses = filteredExpenses.filter(
      expense => expense.category === filterCategory
    );
  }

  // Filter by search query
  if (searchQuery.trim()) {
    filteredExpenses = filteredExpenses.filter(expense =>
      expense.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Filter by date range
  if (dateRange.start) {
    filteredExpenses = filteredExpenses.filter(
      expense => expense.date >= dateRange.start
    );
  }
  if (dateRange.end) {
    filteredExpenses = filteredExpenses.filter(
      expense => expense.date <= dateRange.end
    );
  }

  const categories = Array.from(new Set(expenses.map(e => e.category)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="bg-indigo-600 p-3 rounded-xl shadow-lg">
              <Wallet className="size-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Trackify
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Track, analyze, and optimize your spending habits
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <DollarSign className="size-5" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('charts')}
              className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all ${
                activeTab === 'charts'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BarChart3 className="size-5" />
              Analytics
            </button>
          </div>
        </div>

        {activeTab === 'overview' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Form */}
            <div className="lg:col-span-1 space-y-6">
              <ExpenseForm
                onAddExpense={addExpense}
                editingExpense={editingExpense}
                onUpdateExpense={updateExpense}
                onCancelEdit={() => setEditingExpense(null)}
              />
              <BudgetTracker
                budgets={budgets}
                expenses={expenses}
                onUpdateBudget={updateBudget}
                onDeleteBudget={deleteBudget}
                categories={categories}
              />
            </div>

            {/* Right Column - Stats and List */}
            <div className="lg:col-span-2 space-y-6">
              <ExpenseStats expenses={expenses} budgets={budgets} />
              
              <SearchAndFilter
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                filterCategory={filterCategory}
                onCategoryChange={setFilterCategory}
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
                categories={categories}
              />

              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Expenses
                    {filteredExpenses.length !== expenses.length && (
                      <span className="text-sm font-normal text-gray-500 ml-2">
                        ({filteredExpenses.length} of {expenses.length})
                      </span>
                    )}
                  </h2>
                  <ExportData expenses={filteredExpenses} />
                </div>
                <ExpenseList
                  expenses={filteredExpenses}
                  onDeleteExpense={deleteExpense}
                  onEditExpense={setEditingExpense}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <ExpenseCharts expenses={expenses} />
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">All Expenses</h2>
                <ExportData expenses={expenses} />
              </div>
              <ExpenseList
                expenses={expenses}
                onDeleteExpense={deleteExpense}
                onEditExpense={setEditingExpense}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
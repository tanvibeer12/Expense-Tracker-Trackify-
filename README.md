# Trackify 💰

A modern, feature-rich expense tracking web application built with React, TypeScript, and Tailwind CSS. Track, analyze, and optimize your spending habits with beautiful visualizations and comprehensive budget management.

<img width="1901" height="858" alt="Screenshot 2026-02-11 235146" src="https://github.com/user-attachments/assets/eb0bfefc-35a7-49a8-a791-604952d3b953" />


## ✨ Features

### 📊 Expense Management
- **Add, Edit, Delete Expenses** - Full CRUD operations for managing your expenses
- **Categorization** - Organize expenses into 11+ categories including Food, Transportation, Shopping, and more
- **Date Tracking** - Record expenses with specific dates for accurate tracking

### 📈 Analytics & Insights
- **Interactive Charts** - Visualize spending with pie charts, bar graphs, and line charts
- **Spending Statistics** - View total expenses, monthly spending, daily totals, and category breakdowns
- **Trend Analysis** - Track spending patterns over time with daily and monthly trends

### 🎯 Budget Tracking
- **Set Category Budgets** - Define monthly spending limits for each category
- **Progress Monitoring** - Visual progress bars show budget usage in real-time
- **Overspending Alerts** - Get notified when you exceed your budget limits

### 🔍 Search & Filter
- **Smart Search** - Search expenses by description or category
- **Category Filtering** - Filter expenses by specific categories
- **Date Range Filtering** - View expenses within custom date ranges

### 💾 Data Management
- **Local Storage** - Automatic data persistence in browser
- **Export Options** - Export your data as CSV or JSON files
- **Data Privacy** - All data stays on your device

### 🎨 User Experience
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Beautiful transitions powered by Motion (Framer Motion)
- **Modern UI** - Clean, gradient-based design with intuitive navigation
- **Dual View Modes** - Switch between Overview and Analytics tabs

## 📸 Screenshots
(<img width="1901" height="858" alt="Screenshot 2026-02-11 235146" src="https://github.com/user-attachments/assets/a49d6500-8320-43b9-bedb-f6ef952b3d71" />)
<img width="1881" height="861" alt="Screenshot 2026-02-11 235423" src="https://github.com/user-attachments/assets/b21f59a9-3a0d-4f32-9e34-94518b34727d" />
<img width="1880" height="853" alt="Screenshot 2026-02-11 235453" src="https://github.com/user-attachments/assets/2e0c01e2-ef9d-4adf-94fd-ffaef00ff358" />
<img width="1885" height="860" alt="Screenshot 2026-02-11 235517" src="https://github.com/user-attachments/assets/ec45775d-851e-4a82-8c77-d3a1d50e90aa" />

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/trackify.git
cd trackify
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## 📱 Usage

### Adding an Expense
1. Fill in the expense form on the left sidebar
2. Enter description, amount, category, and date
3. Click "Add Expense" to save

### Setting a Budget
1. Scroll to the "Budget Goals" section
2. Click the "+" icon to add a new budget
3. Select category and set monthly limit
4. Track your progress in real-time

### Viewing Analytics
1. Click the "Analytics" tab in the top navigation
2. Explore pie charts, bar graphs, and trend lines
3. Analyze your spending patterns

### Exporting Data
1. Click the "Export" button
2. Choose CSV or JSON format
3. Your data will be downloaded automatically

## 📁 Project Structure

```
trackify/
├── src/
│   ├── components/
│   │   ├── expense-form.tsx
│   │   ├── expense-list.tsx
│   │   ├── expense-stats.tsx
│   │   ├── expense-charts.tsx
│   │   ├── budget-tracker.tsx
│   │   ├── search-filter.tsx
│   │   └── export-data.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
└── package.json
```

## 🎯 Future Enhancements

- [ ] Cloud sync with Supabase
- [ ] Recurring expense tracking
- [ ] Receipt photo uploads
- [ ] Multi-currency support
- [ ] Expense sharing with family/friends
- [ ] Advanced reports and insights
- [ ] Mobile app version

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name
- GitHub: [tanvibeer12](https://github.com/tanvibeer12)

**Note**: This application stores all data locally in your browser. No data is sent to external servers, ensuring complete privacy of your financial information.

Made with ❤️ using React and Tailwind CSS

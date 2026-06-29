import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageNotFound from "./lib/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import ReloadPrompt from "./ReloadPrompt";

import Home from "@/pages/Home";
import ToolsIndex from "@/pages/ToolsIndex";
import Education from "@/pages/Education";
import Glossary from "@/pages/Glossary";
import Resources from "@/pages/Resources";
import About from "@/pages/About";
import StartHere from "@/pages/StartHere";
import Privacy from "@/pages/Privacy";

import FoodInflationTool from "@/pages/tools/FoodInflationTool";
import DebtCostTool from "@/pages/tools/DebtCostTool";
import MortgageTool from "@/pages/tools/MortgageTool";
import InvestmentGrowthTool from "@/pages/tools/InvestmentGrowthTool";
import RetirementTool from "@/pages/tools/RetirementTool";
import BudgetPlannerTool from "@/pages/tools/BudgetPlannerTool";
import NetWorthTool from "@/pages/tools/NetWorthTool";
import SavingsGoalTool from "@/pages/tools/SavingsGoalTool";
import EmergencyFundTool from "@/pages/tools/EmergencyFundTool";
import SavingsRateTool from "@/pages/tools/SavingsRateTool";

import HowInflationAffectsYourDailyBudget from "@/pages/education/HowInflationAffectsYourDailyBudget";
import BudgetingForBeginners from "@/pages/education/BudgetingForBeginners";
import HowToCompareLoans from "@/pages/education/HowToCompareLoans";
import Budgeting101 from "@/pages/education/Budgeting101";
import Investing101 from "@/pages/education/Investing101";
import RetirementPlanningBasics from "@/pages/education/RetirementPlanningBasics";
import UnderstandingInterestRates from "@/pages/education/UnderstandingInterestRates";
import HowInflationWorks from "@/pages/education/HowInflationWorks";
import CreditScoresAndBorrowing from "@/pages/education/CreditScoresAndBorrowing";
import EmergencyFundsAndSafetyNets from "@/pages/education/EmergencyFundsAndSafetyNets";

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <ReloadPrompt />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/tools" element={<ToolsIndex />} />
          <Route path="/tools/food-inflation" element={<FoodInflationTool />} />
          <Route path="/tools/debt-cost" element={<DebtCostTool />} />
          <Route path="/tools/mortgage-payment" element={<MortgageTool />} />
          <Route path="/tools/investment-growth" element={<InvestmentGrowthTool />} />
          <Route path="/tools/retirement" element={<RetirementTool />} />
          <Route path="/tools/budget-planner" element={<BudgetPlannerTool />} />
          <Route path="/tools/net-worth" element={<NetWorthTool />} />
          <Route path="/tools/savings-goal" element={<SavingsGoalTool />} />
          <Route path="/tools/emergency-fund" element={<EmergencyFundTool />} />
          <Route path="/tools/savings-rate" element={<SavingsRateTool />} />

          <Route path="/education" element={<Education />} />
          <Route
            path="/education/how-inflation-affects-your-daily-budget"
            element={<HowInflationAffectsYourDailyBudget />}
          />
          <Route
            path="/education/budgeting-for-beginners"
            element={<BudgetingForBeginners />}
          />
          <Route
            path="/education/how-to-compare-loans"
            element={<HowToCompareLoans />}
          />
          <Route path="/education/budgeting-101" element={<Budgeting101 />} />
          <Route path="/education/investing-101" element={<Investing101 />} />
          <Route
            path="/education/retirement-planning-basics"
            element={<RetirementPlanningBasics />}
          />
          <Route
            path="/education/understanding-interest-rates"
            element={<UnderstandingInterestRates />}
          />
          <Route
            path="/education/how-inflation-works"
            element={<HowInflationWorks />}
          />
          <Route
            path="/education/credit-scores-and-borrowing"
            element={<CreditScoresAndBorrowing />}
          />
          <Route
            path="/education/emergency-funds-and-safety-nets"
            element={<EmergencyFundsAndSafetyNets />}
          />

          <Route path="/glossary" element={<Glossary />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/privacy" element={<Privacy />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
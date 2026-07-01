import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageNotFound from "./lib/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import ReloadPrompt from "./ReloadPrompt";

const Home = lazy(() => import("@/pages/Home"));
const ToolsIndex = lazy(() => import("@/pages/ToolsIndex"));
const Education = lazy(() => import("@/pages/Education"));
const Glossary = lazy(() => import("@/pages/Glossary"));
const Resources = lazy(() => import("@/pages/Resources"));
const About = lazy(() => import("@/pages/About"));
const StartHere = lazy(() => import("@/pages/StartHere"));
const Privacy = lazy(() => import("@/pages/Privacy"));

const FoodInflation = lazy(() => import("@/pages/tools/food-inflation"));
const DebtCost = lazy(() => import("@/pages/tools/debt-cost"));
const Mortgage = lazy(() => import("@/pages/tools/mortgage"));
const InvestmentGrowth = lazy(() => import("@/pages/tools/investment-growth"));
const Retirement = lazy(() => import("@/pages/tools/retirement"));
const BudgetPlanner = lazy(() => import("@/pages/tools/budget-planner"));
const NetWorth = lazy(() => import("@/pages/tools/net-worth"));
const SavingsGoal = lazy(() => import("@/pages/tools/savings-goal"));
const EmergencyFund = lazy(() => import("@/pages/tools/emergency-fund"));
const SavingsRate = lazy(() => import("@/pages/tools/savings-rate"));
const InflationImpact = lazy(() => import("@/pages/tools/inflation-impact"));
const FutureValue = lazy(() => import("@/pages/tools/future-value"));

const HowInflationAffectsYourDailyBudget = lazy(() =>
  import("@/pages/education/HowInflationAffectsYourDailyBudget")
);
const BudgetingForBeginners = lazy(() =>
  import("@/pages/education/BudgetingForBeginners")
);
const HowToCompareLoans = lazy(() =>
  import("@/pages/education/HowToCompareLoans")
);
const Budgeting101 = lazy(() => import("@/pages/education/Budgeting101"));
const Investing101 = lazy(() => import("@/pages/education/Investing101"));
const RetirementPlanningBasics = lazy(() =>
  import("@/pages/education/RetirementPlanningBasics")
);
const UnderstandingInterestRates = lazy(() =>
  import("@/pages/education/UnderstandingInterestRates")
);
const HowInflationWorks = lazy(() => import("@/pages/education/HowInflationWorks"));
const CreditScoresAndBorrowing = lazy(() =>
  import("@/pages/education/CreditScoresAndBorrowing")
);
const EmergencyFundsAndSafetyNets = lazy(() =>
  import("@/pages/education/EmergencyFundsAndSafetyNets")
);

function RouteLoader() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/70">
          Loading page
        </p>
        <div className="mt-4 h-2 w-40 overflow-hidden rounded-full bg-primary/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <ReloadPrompt />

        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/tools" element={<ToolsIndex />} />
            <Route path="/tools/food-inflation" element={<FoodInflation />} />
            <Route path="/tools/debt-cost" element={<DebtCost />} />
            <Route path="/tools/mortgage-payment" element={<Mortgage />} />
            <Route path="/tools/investment-growth" element={<InvestmentGrowth />} />
            <Route path="/tools/retirement" element={<Retirement />} />
            <Route path="/tools/budget-planner" element={<BudgetPlanner />} />
            <Route path="/tools/net-worth" element={<NetWorth />} />
            <Route path="/tools/savings-goal" element={<SavingsGoal />} />
            <Route path="/tools/emergency-fund" element={<EmergencyFund />} />
            <Route path="/tools/savings-rate" element={<SavingsRate />} />
            <Route path="/tools/inflation-impact" element={<InflationImpact />} />
            <Route path="/tools/future-value" element={<FutureValue />} />

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
              path="/education/budgeting-for-beginners-50-30-20-rule-explained"
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
        </Suspense>
      </Router>

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

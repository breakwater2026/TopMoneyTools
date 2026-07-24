import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import PageNotFound from "./lib/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import ReloadPrompt from "./ReloadPrompt";

const Home = lazy(() => import("@/pages/Home"));
const ToolsIndex = lazy(() => import("@/pages/ToolsIndex"));
const Education = lazy(() => import("@/pages/Education"));
const Glossary = lazy(() => import("@/pages/Glossary"));
const Resources = lazy(() => import("@/pages/Resources"));
const About = lazy(() => import("@/pages/About"));
const TheEditor = lazy(() => import("@/pages/TheEditor"));
const StartHere = lazy(() => import("@/pages/StartHere"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Contact = lazy(() => import("@/pages/Contact"));
const Terms = lazy(() => import("@/pages/Terms"));
const Disclaimer = lazy(() => import("@/pages/Disclaimer"));
const FullDirectory = lazy(() => import("@/pages/FullDirectory"));

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
const TaxBrackets = lazy(() => import("@/pages/tools/tax-brackets"));
const RentVsBuyCalc = lazy(() => import("@/pages/tools/rent-vs-buy"));
const CreditCardPayoff = lazy(() => import("@/pages/tools/credit-card-payoff"));
const CompoundInterest = lazy(() => import("@/pages/tools/compound-interest"));
const HomeAffordabilityCalc = lazy(() => import("@/pages/tools/home-affordability"));
const AutoLoan = lazy(() => import("@/pages/tools/auto-loan"));
const RetirementWithdrawal = lazy(() => import("@/pages/tools/retirement-withdrawal"));
const StudentLoan = lazy(() => import("@/pages/tools/student-loan"));
const DcaVsLumpSum = lazy(() => import("@/pages/tools/dca-vs-lump-sum"));
const InsuranceGap = lazy(() => import("@/pages/tools/insurance-gap"));
const NetWorthProjection = lazy(() => import("@/pages/tools/net-worth-projection"));
const FireNumber = lazy(() => import("@/pages/tools/fire-number"));
const HowOurCalculatorsWork = lazy(() => import("@/pages/tools/how-our-calculators-work"));

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
const TaxBracketsExplained = lazy(() => import("@/pages/education/TaxBracketsExplained"));
const RentVsBuy = lazy(() => import("@/pages/education/RentVsBuy"));
const CreditCardInterest = lazy(() => import("@/pages/education/CreditCardInterest"));
const CompoundInterestGuide = lazy(() => import("@/pages/education/CompoundInterestGuide"));
const HomeAffordability = lazy(() => import("@/pages/education/HomeAffordability"));
const CarBuyingGuide = lazy(() => import("@/pages/education/CarBuyingGuide"));
const SafeWithdrawalRates = lazy(() => import("@/pages/education/SafeWithdrawalRates"));
const StudentLoanStrategies = lazy(() => import("@/pages/education/StudentLoanStrategies"));
const DollarCostAveraging = lazy(() => import("@/pages/education/DollarCostAveraging"));
const InsuranceEssentials = lazy(() => import("@/pages/education/InsuranceEssentials"));
const SideHustleEconomics = lazy(() => import("@/pages/education/SideHustleEconomics"));
const CouplesAndMoney = lazy(() => import("@/pages/education/CouplesAndMoney"));
const InflationProofingSavings = lazy(() => import("@/pages/education/InflationProofingSavings"));
const NetWorthByAge = lazy(() => import("@/pages/education/NetWorthByAge"));
const FireMovement = lazy(() => import("@/pages/education/FireMovement"));
const NetWorthHabit = lazy(() => import("@/pages/education/NetWorthHabit"));
const NeedsWantsGrayZone = lazy(() => import("@/pages/education/NeedsWantsGrayZone"));
const MinimumPaymentsCost = lazy(() => import("@/pages/education/MinimumPaymentsCost"));
const FixedVsVariableRates = lazy(() => import("@/pages/education/FixedVsVariableRates"));
const DownPaymentTradeoffs = lazy(() => import("@/pages/education/DownPaymentTradeoffs"));
const RentingLongerMyth = lazy(() => import("@/pages/education/RentingLongerMyth"));
const WindfallPlan = lazy(() => import("@/pages/education/WindfallPlan"));
const IndexFundsPlainEnglish = lazy(() => import("@/pages/education/IndexFundsPlainEnglish"));
const RiskToleranceVsCapacity = lazy(() => import("@/pages/education/RiskToleranceVsCapacity"));
const SequenceOfReturns = lazy(() => import("@/pages/education/SequenceOfReturns"));
const HowMuchHouseTooMuch = lazy(() => import("@/pages/education/HowMuchHouseTooMuch"));
const CarBuyingCashLoanWait = lazy(() => import("@/pages/education/CarBuyingCashLoanWait"));
const StudentLoansFirst90Days = lazy(() => import("@/pages/education/StudentLoansFirst90Days"));
const InsuranceBasicsGaps = lazy(() => import("@/pages/education/InsuranceBasicsGaps"));
const MonthlyMoneyReview = lazy(() => import("@/pages/education/MonthlyMoneyReview"));

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
            <Route path="/tools/tax-brackets" element={<TaxBrackets />} />
            <Route path="/tools/rent-vs-buy" element={<RentVsBuyCalc />} />
            <Route path="/tools/credit-card-payoff" element={<CreditCardPayoff />} />
            <Route path="/tools/compound-interest" element={<CompoundInterest />} />
            <Route path="/tools/home-affordability" element={<HomeAffordabilityCalc />} />
            <Route path="/tools/auto-loan" element={<AutoLoan />} />
            <Route path="/tools/retirement-withdrawal" element={<RetirementWithdrawal />} />
            <Route path="/tools/student-loan" element={<StudentLoan />} />
            <Route path="/tools/dca-vs-lump-sum" element={<DcaVsLumpSum />} />
            <Route path="/tools/insurance-gap" element={<InsuranceGap />} />
            <Route path="/tools/net-worth-projection" element={<NetWorthProjection />} />
            <Route path="/tools/fire-number" element={<FireNumber />} />
            <Route path="/tools/how-our-calculators-work" element={<HowOurCalculatorsWork />} />

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
              element={<Navigate to="/education/budgeting-for-beginners" replace />}
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
            <Route path="/education/tax-brackets-explained" element={<TaxBracketsExplained />} />
            <Route path="/education/rent-vs-buy" element={<RentVsBuy />} />
            <Route path="/education/credit-card-interest" element={<CreditCardInterest />} />
            <Route path="/education/compound-interest-guide" element={<CompoundInterestGuide />} />
            <Route path="/education/home-affordability" element={<HomeAffordability />} />
            <Route path="/education/car-buying-guide" element={<CarBuyingGuide />} />
            <Route path="/education/safe-withdrawal-rates" element={<SafeWithdrawalRates />} />
            <Route path="/education/student-loan-strategies" element={<StudentLoanStrategies />} />
            <Route path="/education/dollar-cost-averaging" element={<DollarCostAveraging />} />
            <Route path="/education/insurance-essentials" element={<InsuranceEssentials />} />
            <Route path="/education/side-hustle-economics" element={<SideHustleEconomics />} />
            <Route path="/education/couples-and-money" element={<CouplesAndMoney />} />
            <Route path="/education/inflation-proofing-savings" element={<InflationProofingSavings />} />
            <Route path="/education/net-worth-by-age" element={<NetWorthByAge />} />
            <Route path="/education/fire-movement" element={<FireMovement />} />
            <Route path="/education/net-worth-habit" element={<NetWorthHabit />} />
            <Route path="/education/needs-wants-gray-zone" element={<NeedsWantsGrayZone />} />
            <Route path="/education/minimum-payments-cost" element={<MinimumPaymentsCost />} />
            <Route path="/education/fixed-vs-variable-rates" element={<FixedVsVariableRates />} />
            <Route path="/education/down-payment-tradeoffs" element={<DownPaymentTradeoffs />} />
            <Route path="/education/renting-longer-myth" element={<RentingLongerMyth />} />
            <Route path="/education/windfall-plan" element={<WindfallPlan />} />
            <Route path="/education/index-funds-plain-english" element={<IndexFundsPlainEnglish />} />
            <Route path="/education/risk-tolerance-vs-capacity" element={<RiskToleranceVsCapacity />} />
            <Route path="/education/sequence-of-returns" element={<SequenceOfReturns />} />
            <Route path="/education/how-much-house-too-much" element={<HowMuchHouseTooMuch />} />
            <Route path="/education/car-buying-cash-loan-wait" element={<CarBuyingCashLoanWait />} />
            <Route path="/education/student-loans-first-90-days" element={<StudentLoansFirst90Days />} />
            <Route path="/education/insurance-basics-gaps" element={<InsuranceBasicsGaps />} />
            <Route path="/education/monthly-money-review" element={<MonthlyMoneyReview />} />

            <Route path="/glossary" element={<Glossary />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/the-editor" element={<TheEditor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/full-directory" element={<FullDirectory />} />
            <Route path="/terms" element={<Terms />} />
                        <Route path="/disclaimer" element={<Disclaimer />} />
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

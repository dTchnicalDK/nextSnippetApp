// app/components/Pricing.tsx - Pricing Section
interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individual developers",
    features: [
      "Up to 100 snippets",
      "5 collections",
      "Basic search",
      "Individual use only",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    description: "For professional developers & small teams",
    features: [
      "Unlimited snippets",
      "Unlimited collections",
      "Advanced search & filters",
      "Team sharing (up to 5 members)",
      "Priority support",
      "Cloud backup & sync",
      "Custom tags & organization",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$25",
    description: "For growing teams & organizations",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Advanced permissions",
      "Organization-wide libraries",
      "API access",
      "Custom integrations",
      "SSO & advanced security",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose the plan that fits your needs. All plans include core features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan: PricingPlan, index: number) => (
          <div
            key={index}
            className={`rounded-xl p-8 border ${
              plan.highlighted
                ? "border-emerald-500 bg-gray-800/50 relative"
                : "border-gray-700 bg-gray-800/30"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-400">
                /{plan.name === "Free" ? "forever" : "month"}
              </span>
            </div>
            <p className="text-gray-400 mb-6">{plan.description}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature: string, featureIndex: number) => (
                <li key={featureIndex} className="flex items-start">
                  <div className="text-emerald-400 mr-3 mt-1">✓</div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                plan.highlighted
                  ? "bg-emerald-500 hover:bg-emerald-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {plan.name === "Free"
                ? "Get Started Free"
                : `Choose ${plan.name}`}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-400">
        <p>
          All plans include a 14-day free trial. No credit card required for
          Free plan.
        </p>
      </div>
    </section>
  );
};

export default Pricing;

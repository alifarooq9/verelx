import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CheckCircle2Icon } from "lucide-react";

type PlanType = {
	name: string;
	description: string;
	price: number;
	features: string[];
	buttonVariant: "default" | "secondary";
};

const plans: PlanType[] = [
	{
		name: "Basic",
		description:
			"Get started with our Basic Membership plan designed for beginners.",
		price: 29,
		features: [
			"Access to cardio and strength training equipment",
			"Complimentary fitness assessment",
			"Unlimited access during regular hours",
			"Locker room and shower facilities",
		],
		buttonVariant: "secondary",
	},
	{
		name: "Premium",
		description:
			"Elevate your fitness journey with our Premium Membership for a more",
		price: 49,
		features: [
			"All Basic Membership benefits",
			"Unlimited access to group fitness classes",
			"Personalized workout plans",
			"Nutritional guidance from our experts",
		],
		buttonVariant: "default",
	},
	{
		name: "Elite",
		description:
			"Take your fitness to the next level with our Elite Membership, perfect for dedicated fitness enthusiasts.",
		price: 79,
		features: [
			"All Premium Membership benefits",
			"24/7 gym access",
			"Priority booking for group classes",
			"Access to exclusive training workshops",
		],
		buttonVariant: "secondary",
	},
];

const PlansPage = () => {
	return (
		<main className="flex-grow px-14 py-14">
			<h1 className="font-semibold text-2xl py-6 border-b">Plans</h1>

			<section className="py-8 grid grid-cols-3 gap-5">
				{plans.map((plan) => (
					<PricingCard
						description={plan.description}
						features={plan.features}
						name={plan.name}
						price={plan.price}
						buttonVariant={plan.buttonVariant}
						key={plan.name}
					/>
				))}
			</section>
		</main>
	);
};

const PricingCard = ({
	description,
	features,
	name,
	price,
	buttonVariant,
}: PlanType) => {
	return (
		<Card className="max-w-xs">
			<CardHeader className="space-y-4">
				<CardTitle className="font-semibold">{name}</CardTitle>
				<CardDescription className="font-light">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex justify-start items-center">
					<span className="text-4xl font-semibold">$</span>
					<span className="text-6xl font-semibold">{price}</span>
					<span className="text-4xl font-semibold">/mo</span>
				</div>
				<ul className="space-y-2 mt-5">
					{features.map((feature) => (
						<li key={feature} className="flex space-x-2">
							<div>
								<CheckCircle2Icon className="stroke-background fill-green-600 w-6 h-6" />
							</div>
							<span className="font-light">{feature}</span>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter>
				<Button className="w-full" variant={buttonVariant} size="lg">
					Get Started
				</Button>
			</CardFooter>
		</Card>
	);
};

export default PlansPage;

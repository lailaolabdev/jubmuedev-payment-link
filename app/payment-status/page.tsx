"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

// Third Party
import Lottie from "lottie-react";
import success from "@/lotties/success.json";
import error from "@/lotties/error.json";
import pending from "@/lotties/pending.json";

// UI
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

export default function PaymentStatus() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const [paymentStatus, setPaymentStatus] = useState("pending");

	// Effect
	useEffect(() => {
		const status = searchParams.get("status");
		if (status) {
			setPaymentStatus(status);
		}
	}, [searchParams]);

	// Function
	const renderLottie = () => {
		switch (paymentStatus) {
			case "success":
				return <Lottie className="w-full h-full" animationData={success} />;
			case "error":
				return <Lottie className="w-full h-full" animationData={error} />;
			case "pending":
				return <Lottie className="w-full h-full" animationData={pending} />;
			default:
				return <Lottie className="w-full h-full" animationData={pending} />;
		}
	};

	const renderStatusText = (): JSX.Element => {
		const statusMap: { [key: string]: { text: string; className: string } } = {
			success: { text: "Payment Successful", className: "text-green-600" },
			error: { text: "Payment Failed", className: "text-red-600" },
			pending: { text: "Payment Pending", className: "text-blue-600" },
			default: { text: "Payment Pending", className: "text-blue-600" },
		};

		const statusText = statusMap[paymentStatus] || statusMap.default;

		return (
			<p
				className={`${statusText.className} text-center w-full font-bold text-2xl`}
			>
				{statusText.text}
			</p>
		);
	};

	return (
		<Card className="w-full md:w-[50%]   mb-8 md:mb-0 mx-auto">
			<CardBody className="w-full h-full p-4 space-y-4">
				<div className="w-full h-[300px]">{renderLottie()}</div>
				{renderStatusText()}
				<div className="flex items-center justify-center w-full gap-4">
					<Button className="text-center ">Check your bill</Button>
					<Button
						className="text-center "
						color="primary"
						onClick={() => router.push("/")}
					>
						Back to Home
					</Button>
				</div>
			</CardBody>
		</Card>
	);
}

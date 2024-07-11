"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

// Third Party
import Lottie from "lottie-react";
import success from "@/lotties/success.json";
import error from "@/lotties/error.json";

// UI
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

export default function PaymentSuccess() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const [queryParams, setQueryParams] = useState({});

	// Effect
	useEffect(() => {
		const params = {};
		searchParams.forEach((value, key) => {
			params[key] = value;
		});
		setQueryParams(params);
	}, [searchParams]);

	useEffect(() => {
		if (queryParams) {
			console.log(queryParams, "Query Params");

			//  ສົ່ງ Data ທີ່ໄດ້ຮັບມາຈາກ Payment Link ເຂົ້າໃນ API ຂອງຕົນເອງ
			/*
				const res = await fetch(
					"your-api", // Replace with your API endpoint
					{
						method: "POST",
						headers: {
							"Authorization": `...`,
							"Content-Type": "application/json",
						},
						body: JSON.stringify(queryParams),
					}
				)
			*/
		}
	}, [queryParams]);

	return (
		<Card className="w-full md:w-[50%]   mb-8 md:mb-0 mx-auto">
			<CardBody className="w-full h-full p-4 space-y-4">
				<div className="w-full h-[300px]">
					<Lottie className="w-full h-full" animationData={success} />
				</div>
				<p className="text-xl font-bold text-center text-green-500">
					Payment Complete
				</p>
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

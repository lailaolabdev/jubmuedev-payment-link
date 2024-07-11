"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

// Third Party
import Lottie from "lottie-react";
import error from "@/lotties/error.json";

// UI
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

export default function PaymentError() {
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
		}
	}, [queryParams]);

	return (
		<Card className="w-full md:w-[50%]   mb-8 md:mb-0 mx-auto">
			<CardBody className="w-full h-full p-4 space-y-4">
				<div className="w-full h-[300px]">
					<Lottie className="w-full h-full" animationData={error} />
				</div>
				<p className="text-xl font-bold text-center text-red-500">
					Payment Failed
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

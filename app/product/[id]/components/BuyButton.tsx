"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

// UI
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";

interface BuyButtonProps {
	data: any;
	keys: {
		publicKey: string | undefined;
		secretKey: string | undefined;
	};
}

export default function BuyButton({ data, keys }: BuyButtonProps) {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(false);
	const charToRemove = "/";
	const limit = 6;

	// Function
	function removeFirstNChars(
		str: string | undefined,
		charToRemove: string,
		limit: number,
	): string | undefined {
		if (!str) return undefined;

		let count = 0;
		let result = str;

		while (count < limit && result.includes(charToRemove)) {
			result = result.replace(charToRemove, "");
			count++;
		}

		return result;
	}

	const buyFunction = async () => {};

	return (
		<Button onClick={buyFunction} disabled={isLoading}>
			Buy Now {isLoading ? <Spinner /> : null}
		</Button>
	);
}

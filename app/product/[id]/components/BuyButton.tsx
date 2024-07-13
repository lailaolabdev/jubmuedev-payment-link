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
	// const limit = 6;

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

	const buyFunction = async () => {
		// console.log(keys.publicKey);
		// console.log(keys.secretKey);

		try {
			setIsLoading(true);

			console.log(data, "Product Detail");

			const description = data.title;

			// API Production payment link
			// const apiUrl =
			// 	"https://payment-gateway.lailaolab.com/v1/api/link/payment-link";

			const apiUrl =
				"https://payment-gateway.lailaolab.com/v1/api/jubmuedev/payment-link";

			const publicKey = removeFirstNChars(keys.publicKey, charToRemove, 5);
			// const secretKey = removeFirstNChars(keys.secretKey, charToRemove, 6);

			console.log(publicKey, "Public Key");

			// Create the Production Basic Auth header
			// const authHeader = `Basic ${Buffer.from(`${publicKey}:${secretKey}`).toString("base64")}`;

			const authHeader = `Basic ${Buffer.from(`${publicKey}`).toString("base64")}`;

			const _result = await fetch(apiUrl, {
				method: "POST",
				headers: {
					Authorization: authHeader,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					// amount: data.price,
					amount: 1,
					description: description,
				}),
			});

			const result = await _result.json();

			if (_result.ok) {
				router.push(result.redirectURL);
			}

			console.log(result, "Result");
		} catch (error) {
			alert(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Button onClick={buyFunction} disabled={isLoading}>
			Buy Now {isLoading ? <Spinner /> : null}
		</Button>
	);
}

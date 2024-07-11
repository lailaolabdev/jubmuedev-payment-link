import type { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		const publicKey = process.env.PUBLIC_KEY; // Add your public key
		const secretKey = process.env.PAYMENT_GATEWAY_SECRET; // Add your secret key

		// API payment link
		const apiUrl =
			"https://payment-gateway.lailaolab.com:8000/v1/api/link/payment-link";

		// Create the Basic Auth header
		const authHeader = `Basic ${Buffer.from(`${publicKey}:${secretKey}`).toString("base64")}`;

		// const _result = await fetch(apiUrl, {
		// 	method: "POST",
		// 	headers: {
		// 		Authorization: authHeader,
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		amount: body.amount,
		// 		// shop: body.orderGroup.shop,
		// 		// shopName: body.orderGroup.shopName,
		// 		description: "KET TEST",
		// 		// orderGroupId: body.orderGroup.id,
		// 	}),
		// });

		return Response.json({
			data: body,
		});
	} catch (error) {
		console.log("ERROR: ", error);
		return new Response("Error", { status: 500 });
	}
}

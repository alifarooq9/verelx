"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MaximizeIcon } from "lucide-react";
import Link from "next/link";

const userAuthFormSchema = z.object({
	email: z.string().email({ message: "Please enter a valid email" }),
});

type UserAuthFormType = z.infer<typeof userAuthFormSchema>;

const UserAuthForm = () => {
	const form = useForm<UserAuthFormType>({
		resolver: zodResolver(userAuthFormSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = (values: UserAuthFormType) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full max-w-sm mx-auto flex justify-center flex-col items-center h-full"
			>
				<MaximizeIcon className="w-7 h-7 mb-3" strokeWidth={2} />
				<h1 className="text-2xl font-bold">Welcome To Verelx</h1>
				<p className="font-extralight text-muted-foreground mt-2 text-sm">
					Enter your email below to authenticate your account
				</p>

				<FormField
					control={form.control}
					name="email"
					render={({ field}) => (
						<FormItem className="w-full mt-6 space-y-3">
							<FormControl>
								<Input
									placeholder="name@example.com"
									{...field}
								/>
							</FormControl>
							<FormMessage className="text-destructive" />
							<Button className="w-full">
								Continue with Email
							</Button>
						</FormItem>
					)}
				/>

				<div className="relative w-full my-6">
					<div className="absolute w-full inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 text-muted-foreground">
							Or
						</span>
					</div>
				</div>

				<Button size="icon" variant="outline" className="w-full">
					<svg
						height="56.6934px"
						id="Layer_1"
						version="1.1"
						viewBox="0 0 56.6934 56.6934"
						width="56.6934px"
						xmlSpace="preserve"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						className="w-4 h-4 mr-1.5 fill-primary"
					>
						<path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z" />
					</svg>
					Continue with Google
				</Button>
				<p className="px-8 text-center text-sm text-muted-foreground mt-7">
					By clicking continue, you agree to our{" "}
					<Link
						href="/terms"
						className="underline underline-offset-4 whitespace-nowrap hover:text-primary"
					>
						Terms of Service
					</Link>{" "}
					and{" "}
					<Link
						href="/privacy"
						className="underline underline-offset-4 hover:text-primary"
					>
						Privacy Policy
					</Link>
					.
				</p>
			</form>
		</Form>
	);
};

export default UserAuthForm;

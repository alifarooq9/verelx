"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import type { UpdateNameBodyType } from "@/app/api/auth/update-name/route";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useSession } from "next-auth/react";

const updateNameSchema = z.object({
    name: z
        .string()
        .min(2, "Name should be more than 2 characters")
        .max(100, "Name should be less than 100 characters"),
});

type UpdateNameFormType = z.infer<typeof updateNameSchema>;

type UpdateNameFormProps = {
    name: string;
};

const UpdateNameForm = ({ name }: UpdateNameFormProps) => {
    const form = useForm<UpdateNameFormType>({
        resolver: zodResolver(updateNameSchema),
        defaultValues: {
            name,
        },
    });

    const { update } = useSession();

    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (values: UpdateNameFormType) => {
        const body: UpdateNameBodyType = values;

        setLoading(true);

        try {
            const handleFetch = await fetch("/api/auth/update-name", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (handleFetch.ok) {
                await update({
                    name: body.name,
                });

                toast({
                    title: "Name updated successfully",
                });
                return;
            }

            toast({
                title: "Something went wrong",
            });
        } catch (error) {
            toast({
                title: "Something went wrong",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input
                                        placeholder="John Doe"
                                        type="text"
                                        className="py-5 px-4 max-w-md"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-destructive" />
                            </FormItem>
                        )}
                    />
                </CardContent>
                <CardFooter>
                    <Button disabled={loading} type="submit">
                        {loading && (
                            <Loader2Icon className="animate-spin mr-2 w-4 h-4" />
                        )}
                        Save Changes
                    </Button>
                </CardFooter>
            </form>
        </Form>
    );
};

export { UpdateNameForm };

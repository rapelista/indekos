import { LoginDialog } from "@/components/@login/LoginDialog";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useLogin } from "@/hooks/api/auth/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(32),
});

export const LoginForm = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const { isPending, isSuccess, isError, mutate } = useLogin();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        mutate(values, {
            onSuccess: ({ access_token }) => {
                localStorage.setItem("token", access_token);
            },
            onSettled: () => {
                setIsOpenDialog(true);
            },
        });
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan email"
                                        type="email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan password"
                                        type="password"
                                        autoComplete="off"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="flex gap-2"
                        disabled={isPending}
                    >
                        {isPending && <Spinner />} Login
                    </Button>
                </form>
            </Form>

            <LoginDialog
                success={isSuccess}
                error={isError}
                open={isOpenDialog}
                onOpenChange={setIsOpenDialog}
            />
        </>
    );
};

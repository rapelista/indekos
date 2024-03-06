import { LoginForm } from "@/components/@login/LoginForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const LoginCard = () => {
    return (
        <Card className="lg:w-1/3">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                    Silahkan masukkan email dan password untuk dapat login
                </CardDescription>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
            <CardFooter>
                <a href="#">Lupa password?</a>
            </CardFooter>
        </Card>
    );
};

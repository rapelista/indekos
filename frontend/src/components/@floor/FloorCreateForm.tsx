import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateFloor } from "@/hooks/api/floors/useCreateFloor";
import { useGetFloors } from "@/hooks/api/floors/useGetRooms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface IFloorCreateForm {
    close: () => void;
}

export const FloorCreateForm = ({ close }: IFloorCreateForm) => {
    const { refetch } = useGetFloors();
    const { mutate } = useCreateFloor();

    const formSchema = z.object({
        name: z.string().max(32),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // return console.log(values);
        mutate(values, {
            onSettled: close,
            onSuccess: () => {
                refetch();
            },
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="grid items-center grid-cols-4">
                            <FormLabel>Name</FormLabel>
                            <FormControl className="col-span-3">
                                <Input
                                    placeholder="Masukkan nama lantai"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <DialogFooter className="mt-4">
                    <Button type="submit">Submit</Button>
                </DialogFooter>
            </form>
        </Form>
    );
};

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
import { useCreateRoom } from "@/hooks/api/rooms/useCreateRoom";
import { useGetRooms } from "@/hooks/api/rooms/useGetRooms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useGetFloors } from "@/hooks/api/floors/useGetRooms";
import { Muted } from "@/components/ui/typography";
interface IRoomCreateForm {
    close: () => void;
}

export const RoomCreateForm = ({ close }: IRoomCreateForm) => {
    const { refetch: refetchRooms } = useGetRooms();
    const { data, refetch: refetchFloors } = useGetFloors();
    const { mutate } = useCreateRoom();

    const formSchema = z.object({
        name: z.string().max(32),
        width: z.string().transform((string) => parseFloat(string)),
        length: z.string().transform((string) => parseFloat(string)),
        floor_id: z.string().transform((string) => parseFloat(string)),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            width: 0,
            length: 0,
            floor_id: 0,
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        mutate(values, {
            onSettled: close,
            onSuccess: () => {
                refetchFloors();
                refetchRooms();
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
                            <FormLabel>Nama</FormLabel>
                            <FormControl className="col-span-3">
                                <Input
                                    placeholder="Masukkan nama kamar"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="width"
                    render={({ field }) => (
                        <FormItem className="grid items-center grid-cols-4">
                            <FormLabel>Lebar</FormLabel>
                            <FormControl className="col-span-2">
                                <Input
                                    placeholder="Masukkan nama lantai"
                                    type="number"
                                    min={1}
                                    step={0.001}
                                    {...field}
                                />
                            </FormControl>
                            <FormLabel className="ms-2">
                                <Muted>meter</Muted>
                            </FormLabel>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="length"
                    render={({ field }) => (
                        <FormItem className="grid items-center grid-cols-4">
                            <FormLabel>Panjang</FormLabel>
                            <FormControl className="col-span-2">
                                <Input
                                    {...field}
                                    placeholder="Masukkan nama lantai"
                                    type="number"
                                    step={0.001}
                                    min={1}
                                />
                            </FormControl>
                            <FormLabel className="ms-2">
                                <Muted>meter</Muted>
                            </FormLabel>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="floor_id"
                    render={({ field }) => (
                        <FormItem className="grid items-center grid-cols-4">
                            <FormLabel>Kamar</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                    field.value == 0 ? "" : `${field.value}`
                                }
                            >
                                <FormControl>
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Pilih lantai" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {data &&
                                        data.map(({ id, name }, key) => (
                                            <SelectItem
                                                value={`${id}`}
                                                key={key}
                                            >
                                                {name}
                                            </SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>
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

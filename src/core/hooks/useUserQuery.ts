import { useQuery } from "@tanstack/react-query";
import user from "../../constants/data/user";

interface User {
    [key: string]: any;
}

// Simulate async data fetching (in real app, this would be an API call)
const fetchUser = async (): Promise<User> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return { ...user };
};

export const useUserQuery = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: fetchUser,
        staleTime: 1000 * 60 * 60, // 1 hour
    });
};


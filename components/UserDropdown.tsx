"use client"


// import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";


const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => { router.push("/sign-in") };

    //sample user
    const user = {
        name: "Amar",
        email: "amar123@gmail.com"
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-3 text-gray-400 hover:text-yellow-500">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="" />
                        <AvatarFallback className="text-yellow-900 bg-yellow-500 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400 w-auto px-4 min-w-[200px]">
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 py-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="" />
                            <AvatarFallback className="text-yellow-900 bg-yellow-500 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-base font-medium text-gray-400">{user.name}</span>
                            <span className="text-sm text-gray-500 whitespace-nowrap">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-gray-600" />

                <nav className="sm:hidden">
                    <NavItems />
                </nav>
                
                <DropdownMenuItem 
                    onClick={handleSignOut} 
                    className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors transition-colors cursor-pointer"
                >
                    <LogOut className="hidden sm:block mr-2 h-4 w-4" /> 
                    Logout  
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
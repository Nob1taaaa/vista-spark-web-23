
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import authService from "./utils/authService"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export { authService }

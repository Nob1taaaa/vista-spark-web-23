
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

type LoginFields = {
  email: string;
  password: string;
};

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<LoginFields>({ defaultValues: { email: '', password: '' } });

  // Show modal on mount if not authenticated
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") !== "true") {
      setOpen(true);
    }
  }, []);

  const doLogin = (data: LoginFields) => {
    // Simulate login (replace with real auth if needed)
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify({
      email: data.email,
      name: data.email.split("@")[0],
    }));
    toast({
      title: "Login successful",
      description: "Welcome back!",
    });
    setOpen(false);
    navigate("/dashboard");
  };

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-2xl w-full p-0 rounded-2xl overflow-hidden bg-transparent shadow-xl">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left: Branding / Image */}
          <div className="hidden md:flex flex-col justify-center items-center bg-[#232A5D] text-white p-8 w-1/2 min-h-[520px] ">
            <img 
              src="/lovable-uploads/145553dc-6d00-46d0-ae91-3dc2ec8460c5.png"
              alt="Celebrating 25 Years"
              className="rounded-lg w-full object-cover mb-6"
              style={{minHeight: '340px', maxHeight: '340px'}}
            />
            {/* Hide the heading since it's duplicated in image. */}
          </div>
          {/* Right: Form */}
          <div className="relative w-full md:w-1/2 bg-[#4456A2] p-8 flex flex-col justify-center items-center">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-white bg-[#2F3969] hover:bg-[#1C2241] p-1 rounded-full"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <h2 className="font-bold text-2xl md:text-2xl mb-6 text-white text-center">
              Login to continue
            </h2>
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={form.handleSubmit(doLogin)}
            >
              <Input
                {...form.register("email", { required: true })}
                placeholder="Email"
                type="email"
                autoComplete="email"
                className="rounded-md bg-white text-black placeholder-gray-400 px-4 py-3"
                disabled={form.formState.isSubmitting}
                required
              />
              <div className="relative">
                <Input
                  {...form.register("password", { required: true, minLength: 6 })}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  className="rounded-md bg-white text-black placeholder-gray-400 px-4 py-3 pr-12"
                  autoComplete="current-password"
                  disabled={form.formState.isSubmitting}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#F4C145] text-[#2F3969] font-bold uppercase mt-4 rounded"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </form>
            <div className="mt-6 text-white text-center">
              <span>Don't have an account? </span>
              <a href="/register" className="underline font-semibold hover:text-[#F4C145]">
                Register now
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;

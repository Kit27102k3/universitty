import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";

function generateCaptcha(length = 5) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  role: string; // "student" hoặc "staff"
}

export default function LoginModal({ open, onOpenChange, role }: LoginModalProps) {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaError, setCaptchaError] = useState("");

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    setValue("captchaInput", "");
    setCaptchaError("");
  };

  const onSubmit = (data: any) => {
    if ((data.captchaInput || "").toUpperCase() !== captcha) {
      setCaptchaError("Mã captcha không đúng.");
      return;
    }
    setCaptchaError("");
    // Xử lý đăng nhập ở đây
    onOpenChange(false);
    reset();
    refreshCaptcha();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Đăng nhập {role === "student" ? "Sinh viên" : "Cán bộ - Giáo viên"}</DialogTitle>
          <DialogDescription>Vui lòng nhập đầy đủ thông tin để tiếp tục.</DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input placeholder={role === "student" ? "Mã số sinh viên" : "Email công vụ"} {...register("id", { required: "Bắt buộc" })} />
            {errors.id && <p className="text-red-500 text-xs mt-1">{errors.id.message as string}</p>}
          </div>
          <div>
            <Input type="password" placeholder="Mật khẩu" {...register("password", { required: "Bắt buộc" })} />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message as string}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Mã captcha:</label>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-2 bg-gray-200 rounded font-mono tracking-widest select-none text-lg">{captcha}</span>
              <Button type="button" variant="outline" size="sm" onClick={refreshCaptcha}>Làm mới</Button>
            </div>
            <Input placeholder="Nhập mã captcha" autoComplete="off" {...register("captchaInput", { required: "Bắt buộc" })} />
            {(errors.captchaInput || captchaError) && <p className="text-red-500 text-xs mt-1">{errors.captchaInput?.message as string || captchaError}</p>}
          </div>
          <Button type="submit" className="w-full">Đăng nhập</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 
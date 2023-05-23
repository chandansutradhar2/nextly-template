import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border mb-2 border-blue-300 focus:border-blue-500 rounded-md 
                  placeholder:font-sans placeholder:font-light"
        placeholder=" "
        autoComplete="off"
        required
      />
      <label
        className={`absolute top-0 left-0 px-3 py-2 pointer-events-none transition-all duration-300 ${
          password ? "text-xs text-gray-600" : "text-base text-gray-400"
        }`}></label>
      <div
        className="absolute top-0 right-0 px-3 py-4 cursor-pointer"
        onClick={togglePasswordVisibility}>
        {showPassword ? (
          <FaEyeSlash className="text-gray-400" />
        ) : (
          <FaEye className="text-gray-400" />
        )}
      </div>
    </div>
  );
};

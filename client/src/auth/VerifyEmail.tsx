import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

import { useRef, useState } from "react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);

  const loading = false;
  const HandleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }

    //  for moving the next input
    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  //   for back input move
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200 shadow-2xl">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl"> Verify your emial </h1>
          <p className="text-sm text-gray-600 mt-2">
            Enter the 6 digit code sent to your email address{" "}
          </p>
        </div>

        <form action="">
          <div className="flex justify-between items-center">
            {otp.map((letter: string, index: number) => (
              <Input
                ref={(element) => (inputRef.current[index] = element)}
                key={index}
                type="text"
                maxLength={1}
                value={letter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  HandleChange(index, e?.target.value)
                }
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDown(index, e)
                }
                className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>

          {loading ? (
            <Button
              disabled
              className="w-full  mt-6  bg-orange hover:bg-hoverOrange"
            >
              {" "}
              <Loader2 className="animate-spin h-4 w-4" /> please wait{" "}
            </Button>
          ) : (
            <Button className={"bg-orange hover:bg-hoverOrange mt-6 w-full"}>
              {" "}
              Verify
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;

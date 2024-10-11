import * as Slot from "@rn-primitives/slot";
import type { SlottableTextProps, TextRef } from "@rn-primitives/types";
import * as React from "react";
import { Text as RNText } from "react-native";
import { FONT_STYLE_MAP } from "~/app/utils/constants/variables"; // Loại bỏ FontStyleEnum vì không còn cần nữa
import { cn } from "~/lib/utils";

// Định nghĩa TextClassContext nếu cần giữ các class chung
const TextClassContext = React.createContext<string | undefined>(undefined);

interface ExtendedTextProps extends SlottableTextProps {
  fontStyle?: keyof typeof FONT_STYLE_MAP; // Thay đổi kiểu fontStyle để nhận diện các khóa từ FONT_STYLE_MAP
}

const Text = React.forwardRef<TextRef, ExtendedTextProps>(
  ({ className, asChild = false, style, fontStyle = "josefin-regular", ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;

    // Lấy font từ FONT_STYLE_MAP dựa trên fontStyle
    const fontFamily = FONT_STYLE_MAP[fontStyle];

    return (
      <Component
        style={[{ fontFamily }, style]} // Áp dụng fontFamily trực tiếp vào style
        className={cn("w-full text-base text-foreground web:select-text", textClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";

export { Text, TextClassContext };

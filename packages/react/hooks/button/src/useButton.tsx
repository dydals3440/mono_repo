import { BaseButtonProps, OverloadedButtonFunction } from "./types";

export const useButton: OverloadedButtonFunction = (props: any): any => {
  const {
    elementType = "button",
    isDisabled,
    isLoading,
    tabIndex,
    onKeyDown,
    type = "button",
  } = props;

  const disabled = isDisabled || isLoading;

  // html버튼이 아니라 다른 값도 들어올 수 있으므로 제네릭 제거 KeyboardEvent<Button>
  // 버튼 같은 경우에는 스페이스에는 클릭동작이 추가, 그 외의 다른 div input에는 스페이스에서는 적용이 안됨.
  // 고도화하기 위해서는 event.key의 space도 넣어줌. spacebar도 처리를해줌
  const handleKeyDown = (event: React.KeyboardEvent) => {
    onKeyDown?.(event);

    if (event.key === " " || event.key === "Spacebar" || event.key === "32") {
      if (disabled) return;
      if (event.defaultPrevented) return;
      if (elementType === "button") return;

      event.preventDefault();
      (event.currentTarget as HTMLElement).click();

      return;
    }

    if (event.key === "Enter" || event.key === "13") {
      if (disabled) return;
      if (event.defaultPrevented) return;
      // element type이 input인 경우, type이 버튼이 아닌 경우에는 엔터 제외
      // input 같은 경우에는 submit과 reset이 동작해야 함. 여기서 클릭이 되어 버리면 의도와 다른 동작이 될 수 있음.
      // 그래서 Element의 타입이
      if (elementType === "input" && type !== "button") return;

      event.preventDefault();
      (event.currentTarget as HTMLElement).click();
      // 클릭이 되면 안되는 경우에는 return을 해줘야 함.
      return;
    }
  };

  // 기본적인 baseProps
  const baseProps = {
    ...props,
    "data-loading": isLoading,
    tabIndex: disabled ? undefined : (tabIndex ?? 0),
    onKeyDown: handleKeyDown,
  };

  let additionalProps = {};

  switch (elementType) {
    case "button": {
      additionalProps = {
        type: type ?? "button",
        disabled,
      };
      break;
    }
    case "a": {
      // a 태그는 disabled 되었을 때 동작못하게
      const { href, target, rel } = props as BaseButtonProps<"a">;

      additionalProps = {
        role: "button",
        href: disabled ? undefined : href,
        target: disabled ? undefined : target,
        rel: disabled ? undefined : rel,
        // 접근성을 위해 추가
        "aria-disabled": isDisabled,
      };

      break;
    }
    case "input": {
      additionalProps = {
        role: "button",
        type: props.type,
        disabled,
        // input은 disabled에 대한 적용이 필요 없음 제외
        "aria-disabled": undefined,
      };

      break;
    }
    default: {
      additionalProps = {
        role: "button",
        type: type ?? "button",
        "aria-disabled": isDisabled,
      };
      break;
    }
  }

  const buttonProps = {
    ...baseProps,
    ...additionalProps,
  };

  return {
    buttonProps,
  };
};

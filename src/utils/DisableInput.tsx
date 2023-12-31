import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface FormProps<TFormValues extends Record<string, unknown>> {
  label: string;
  icon?: boolean;
  type?: string;
  defaultValue?: any;
  fontWeight?: number | string;
  onChange?: any;
  placeholder?: string;
  passwordVisible?: boolean;
  changeVisibility?: any;
  focusBorderColor?: string;
  required?: boolean;
  disableLabel?: any;
  borderRadius?: string;
  value?: any;
  currency?: boolean;
  readonly?: boolean;
}

const DisabledInput = <TFormValues extends Record<string, any>>({
  label,
  type = 'text',
  onChange,
  placeholder,
  fontWeight,
  passwordVisible,
  defaultValue,
  changeVisibility,
  focusBorderColor,
  required = false,
  icon = false,
  disableLabel = false,
  borderRadius = '4px',
  value,
  currency = false,
  readonly,
}: FormProps<TFormValues>) => {
  return (
    <>
      <div className="w-full">
        <label className="text-sm">{label}</label>
        {currency ? (
          <CurrencyInput
            placeholder={placeholder}
            defaultValue={defaultValue}
            decimalsLimit={2}
            prefix="&#8358;"
            className="currency"
            disabled={disableLabel}
            onValueChange={onChange}
            value={value}
          />
        ) : (
          <div className="relative w-full">
            <input
              type={type}
              placeholder={placeholder}
              className="w-full h-10 px-3 border rounded-md focus:border-gray-400"
              defaultValue={defaultValue}
              style={{
                fontWeight,
                borderRadius,
                borderColor: focusBorderColor,
              }}
              disabled={disableLabel}
              value={value}
              onChange={onChange}
              readOnly={readonly}
            />
            {icon && (
              <div
                onClick={changeVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-brand-100"
              >
                {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DisabledInput;

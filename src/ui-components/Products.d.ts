/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, StepperFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductsInputValues = {
    ProductName?: string;
    ProductDescription?: string;
    ProductImage?: string;
    ProductWeight?: number;
    ProductPrice?: number;
    ProductQuantity?: number;
};
export declare type ProductsValidationValues = {
    ProductName?: ValidationFunction<string>;
    ProductDescription?: ValidationFunction<string>;
    ProductImage?: ValidationFunction<string>;
    ProductWeight?: ValidationFunction<number>;
    ProductPrice?: ValidationFunction<number>;
    ProductQuantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductsOverridesProps = {
    ProductsGrid?: PrimitiveOverrideProps<GridProps>;
    ProductName?: PrimitiveOverrideProps<TextFieldProps>;
    ProductDescription?: PrimitiveOverrideProps<TextFieldProps>;
    ProductImage?: PrimitiveOverrideProps<TextFieldProps>;
    ProductWeight?: PrimitiveOverrideProps<TextFieldProps>;
    ProductPrice?: PrimitiveOverrideProps<TextFieldProps>;
    ProductQuantity?: PrimitiveOverrideProps<StepperFieldProps>;
} & EscapeHatchProps;
export declare type ProductsProps = React.PropsWithChildren<{
    overrides?: ProductsOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductsInputValues) => ProductsInputValues;
    onSuccess?: (fields: ProductsInputValues) => void;
    onError?: (fields: ProductsInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductsInputValues) => ProductsInputValues;
    onValidate?: ProductsValidationValues;
} & React.CSSProperties>;
export default function Products(props: ProductsProps): React.ReactElement;

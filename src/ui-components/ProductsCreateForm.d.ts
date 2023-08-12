/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductsCreateFormInputValues = {
    ProductName?: string;
    ProductDescription?: string;
    ProductImage?: string;
    ProductWeight?: number;
    ProductPrice?: number;
    ProductQuantity?: number;
};
export declare type ProductsCreateFormValidationValues = {
    ProductName?: ValidationFunction<string>;
    ProductDescription?: ValidationFunction<string>;
    ProductImage?: ValidationFunction<string>;
    ProductWeight?: ValidationFunction<number>;
    ProductPrice?: ValidationFunction<number>;
    ProductQuantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductsCreateFormOverridesProps = {
    ProductsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ProductName?: PrimitiveOverrideProps<TextFieldProps>;
    ProductDescription?: PrimitiveOverrideProps<TextFieldProps>;
    ProductImage?: PrimitiveOverrideProps<TextFieldProps>;
    ProductWeight?: PrimitiveOverrideProps<TextFieldProps>;
    ProductPrice?: PrimitiveOverrideProps<TextFieldProps>;
    ProductQuantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductsCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductsCreateFormInputValues) => ProductsCreateFormInputValues;
    onSuccess?: (fields: ProductsCreateFormInputValues) => void;
    onError?: (fields: ProductsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductsCreateFormInputValues) => ProductsCreateFormInputValues;
    onValidate?: ProductsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductsCreateForm(props: ProductsCreateFormProps): React.ReactElement;

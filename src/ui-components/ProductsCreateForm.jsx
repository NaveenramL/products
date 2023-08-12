/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Products } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProductsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ProductName: "",
    ProductDescription: "",
    ProductImage: "",
    ProductWeight: "",
    ProductPrice: "",
    ProductQuantity: "",
  };
  const [ProductName, setProductName] = React.useState(
    initialValues.ProductName
  );
  const [ProductDescription, setProductDescription] = React.useState(
    initialValues.ProductDescription
  );
  const [ProductImage, setProductImage] = React.useState(
    initialValues.ProductImage
  );
  const [ProductWeight, setProductWeight] = React.useState(
    initialValues.ProductWeight
  );
  const [ProductPrice, setProductPrice] = React.useState(
    initialValues.ProductPrice
  );
  const [ProductQuantity, setProductQuantity] = React.useState(
    initialValues.ProductQuantity
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProductName(initialValues.ProductName);
    setProductDescription(initialValues.ProductDescription);
    setProductImage(initialValues.ProductImage);
    setProductWeight(initialValues.ProductWeight);
    setProductPrice(initialValues.ProductPrice);
    setProductQuantity(initialValues.ProductQuantity);
    setErrors({});
  };
  const validations = {
    ProductName: [{ type: "Required" }],
    ProductDescription: [{ type: "Required" }],
    ProductImage: [{ type: "Required" }],
    ProductWeight: [],
    ProductPrice: [{ type: "Required" }],
    ProductQuantity: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ProductName,
          ProductDescription,
          ProductImage,
          ProductWeight,
          ProductPrice,
          ProductQuantity,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Products(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductsCreateForm")}
      {...rest}
    >
      <TextField
        label="Product name"
        isRequired={true}
        isReadOnly={false}
        value={ProductName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProductName: value,
              ProductDescription,
              ProductImage,
              ProductWeight,
              ProductPrice,
              ProductQuantity,
            };
            const result = onChange(modelFields);
            value = result?.ProductName ?? value;
          }
          if (errors.ProductName?.hasError) {
            runValidationTasks("ProductName", value);
          }
          setProductName(value);
        }}
        onBlur={() => runValidationTasks("ProductName", ProductName)}
        errorMessage={errors.ProductName?.errorMessage}
        hasError={errors.ProductName?.hasError}
        {...getOverrideProps(overrides, "ProductName")}
      ></TextField>
      <TextField
        label="Product description"
        isRequired={true}
        isReadOnly={false}
        value={ProductDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProductName,
              ProductDescription: value,
              ProductImage,
              ProductWeight,
              ProductPrice,
              ProductQuantity,
            };
            const result = onChange(modelFields);
            value = result?.ProductDescription ?? value;
          }
          if (errors.ProductDescription?.hasError) {
            runValidationTasks("ProductDescription", value);
          }
          setProductDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("ProductDescription", ProductDescription)
        }
        errorMessage={errors.ProductDescription?.errorMessage}
        hasError={errors.ProductDescription?.hasError}
        {...getOverrideProps(overrides, "ProductDescription")}
      ></TextField>
      <TextField
        label="Product image"
        isRequired={true}
        isReadOnly={false}
        value={ProductImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProductName,
              ProductDescription,
              ProductImage: value,
              ProductWeight,
              ProductPrice,
              ProductQuantity,
            };
            const result = onChange(modelFields);
            value = result?.ProductImage ?? value;
          }
          if (errors.ProductImage?.hasError) {
            runValidationTasks("ProductImage", value);
          }
          setProductImage(value);
        }}
        onBlur={() => runValidationTasks("ProductImage", ProductImage)}
        errorMessage={errors.ProductImage?.errorMessage}
        hasError={errors.ProductImage?.hasError}
        {...getOverrideProps(overrides, "ProductImage")}
      ></TextField>
      <TextField
        label="Product weight"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ProductWeight}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ProductName,
              ProductDescription,
              ProductImage,
              ProductWeight: value,
              ProductPrice,
              ProductQuantity,
            };
            const result = onChange(modelFields);
            value = result?.ProductWeight ?? value;
          }
          if (errors.ProductWeight?.hasError) {
            runValidationTasks("ProductWeight", value);
          }
          setProductWeight(value);
        }}
        onBlur={() => runValidationTasks("ProductWeight", ProductWeight)}
        errorMessage={errors.ProductWeight?.errorMessage}
        hasError={errors.ProductWeight?.hasError}
        {...getOverrideProps(overrides, "ProductWeight")}
      ></TextField>
      <TextField
        label="Product price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={ProductPrice}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ProductName,
              ProductDescription,
              ProductImage,
              ProductWeight,
              ProductPrice: value,
              ProductQuantity,
            };
            const result = onChange(modelFields);
            value = result?.ProductPrice ?? value;
          }
          if (errors.ProductPrice?.hasError) {
            runValidationTasks("ProductPrice", value);
          }
          setProductPrice(value);
        }}
        onBlur={() => runValidationTasks("ProductPrice", ProductPrice)}
        errorMessage={errors.ProductPrice?.errorMessage}
        hasError={errors.ProductPrice?.hasError}
        {...getOverrideProps(overrides, "ProductPrice")}
      ></TextField>
      <TextField
        label="Product quantity"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={ProductQuantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ProductName,
              ProductDescription,
              ProductImage,
              ProductWeight,
              ProductPrice,
              ProductQuantity: value,
            };
            const result = onChange(modelFields);
            value = result?.ProductQuantity ?? value;
          }
          if (errors.ProductQuantity?.hasError) {
            runValidationTasks("ProductQuantity", value);
          }
          setProductQuantity(value);
        }}
        onBlur={() => runValidationTasks("ProductQuantity", ProductQuantity)}
        errorMessage={errors.ProductQuantity?.errorMessage}
        hasError={errors.ProductQuantity?.hasError}
        {...getOverrideProps(overrides, "ProductQuantity")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Checkout"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

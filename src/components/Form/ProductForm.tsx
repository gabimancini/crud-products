import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import * as yup from "yup";
import { FieldForm } from "./FieldForm";
import { useAddProductMutation } from "../../api/apiSlice";

interface FormValues {
  title: string;
  description: string;
  price: number;
  image: string
}

const validationSchema = yup.object().shape({
  title: yup.string().required("Required"),
  description: yup.string().required("Required")
});

export default function App() {
  const [addProduct] = useAddProductMutation()
  return (
    <>
      <Container  >
        <Box mb={3} p={2}>
          <Typography
            align="center"
            variant="h5"
            style={{ lineHeight: 1.25, marginBottom: 16 }}
          >
            Add your own products
          </Typography>
        </Box>
        <Formik
          initialValues={{
            title: "",
            description: "",
            price: 0,
            image: ""
          }}
          validationSchema={validationSchema}
          onSubmit={(
            values: FormValues,
            formikHelpers: FormikHelpers<FormValues>
          ) => {
            const newValue = JSON.stringify(values)
            addProduct(newValue);
            console.log(newValue)
            formikHelpers.setSubmitting(false);
          }}
        >
          {(formikProps: FormikProps<FormValues>) => (
            <Form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item  >
                  <Field
                    name="title"
                    label="Title"
                    size="small"
                    component={FieldForm}
                  />
                </Grid>
                <Grid item  >
                  <Field
                    name="description"
                    label="Description"
                    size="small"
                    component={FieldForm}
                  />
                </Grid>
                <Grid item  >
                  <Field
                    type="number"
                    name="price"
                    label="Price"
                    size="small"
                    component={FieldForm}
                  />
                </Grid>
                <Grid item  >
                  <Field
                    name="image"
                    label="Pegar URL de imagen"
                    size="small"
                    component={FieldForm}
                  />
                </Grid>
                <Grid item  >
                  <Button
                    type="submit"
                    variant="outlined"
                    size="large"
                    color="primary"
                    disabled={formikProps.isSubmitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}

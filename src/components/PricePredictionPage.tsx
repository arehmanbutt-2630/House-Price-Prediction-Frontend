import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Hero from './Hero';

interface FormValues {
  squareFootage: number | '';
  bedrooms: number | '';
}

const validationSchema = Yup.object({
  squareFootage: Yup.number()
    .required('Required')
    .positive('Must be positive')
    .typeError('Must be a number'),
  bedrooms: Yup.number()
    .required('Required')
    .min(1, 'At least 1 bedroom')
    .typeError('Must be a number'),
});

const PricePredictionPage = () => {
  const [predictedPrice, setPredictedPrice] = useState<string | null>(null);

  const initialValues: FormValues = {
    squareFootage: '',
    bedrooms: '',
  };

  const handleSubmit = (values: FormValues) => {
    console.log('Prediction Input:', values);

    setTimeout(() => {
    const fakePrice = "425,000";
    setPredictedPrice(fakePrice);
  }, 1000);
  };

  return (
    <>
      <Hero
        heading="Predict Your Dream Home's Price"
        subHeading="Enter your property details below to get an instant price prediction powered by our advanced AI model."
        height="230px"
      />

      <div className="flex items-center justify-center p-6">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center gap-4 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] rounded-lg p-6 w-[550px]">
            <h2 className="text-2xl font-semibold pb-8">Enter Property Details</h2>

            <div className="w-full">
              <Field
                name="squareFootage"
                type="number"
                placeholder="Square Footage"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <ErrorMessage
                name="squareFootage"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="w-full">
              <Field
                name="bedrooms"
                type="number"
                placeholder="Number of Bedrooms"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <ErrorMessage
                name="bedrooms"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-md w-full py-2 my-4 font-semibold"
            >
              GET PRICE PREDICTION
            </button>
            {predictedPrice && (
              <div className="text-lg font-semibold text-green-600">
                Predicted Price: ${predictedPrice}
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default PricePredictionPage;

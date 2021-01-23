import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { queryApi } from "../utils/queryApi";
import { useDispatch } from "react-redux";
import { setAction, updateMovie } from "../redux/movies/moviesSlice";
import { Wrapper, MovieListTitle, Form, FormChangeButton, FormError, FormGroup, FormField, Loader } from "../components/Styled"
export default function UpdateMovie(props) {
  const init = {
    title: props.movie.title,
    rating: props.movie.rating,
    releaseDate: props.movie.releaseDate,
    genre: props.movie.genre,
    image: "",
  };
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: init,
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      setShowLoader(true);
      const [res, err] = await queryApi(
        "/" + props.movie._id,
        values,
        "PUT",
        true
      );
      if (err) {
        setShowLoader(false);
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else {
        dispatch(setAction("list"));
        dispatch(updateMovie(res));
      }
    },
  });

  return (
    <Wrapper className="fade">
      <MovieListTitle>Update Movie</MovieListTitle>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          {error.visible && <FormError>{error.message}</FormError>}
        </FormGroup>
        <FormGroup>
          <FormField
            type="text"
            name="title"
            placeholder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
          ></FormField>
          {formik.errors.title && formik.touched.title && (
            <FormError>{formik.errors.title}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormField
            type="number"
            name="rating"
            min="0"
            max="10"
            step="0.1"
            placeholder="Rating"
            value={formik.values.rating}
            onChange={formik.handleChange}
          ></FormField>
          {formik.errors.rating && formik.touched.rating && (
            <FormError>{formik.errors.rating}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormField
            type="date"
            name="releaseDate"
            placeholder="Rating"
            value={formik.values.releaseDate}
            onChange={formik.handleChange}
          ></FormField>
          {formik.errors.releaseDate && formik.touched.releaseDate && (
            <FormError>{formik.errors.releaseDate}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormField
            type="text"
            name="genre"
            placeholder="Genre"
            value={formik.values.genre}
            onChange={formik.handleChange}
          ></FormField>
          {formik.errors.genre && formik.touched.genre && (
            <FormError>{formik.errors.genre}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormField
            type="file"
            name="image"
            onChange={(event) => {
              formik.setFieldValue("image", event.target.files[0]);
            }}
          ></FormField>
          {formik.errors.image && formik.touched.image && (
            <FormError>{formik.errors.image}</FormError>
          )}
        </FormGroup>
        {showLoader && <Spinner></Spinner>}
        <FormChangeButton disabled={showLoader}>Update </FormChangeButton>
      </Form>
    </Wrapper>
  );
}

const Spinner = () => (
  <Loader viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="2"
    />
  </Loader>
);


const yupSchema = Yup.object({
  title: Yup.string().required("Obligatory Field"),
  genre: Yup.string().required("Obligatory Field"),
  rating: Yup.number().required("Obligatory Field"),
  releaseDate: Yup.date().required("Obligatory Field"),
});

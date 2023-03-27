import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../constants";
import { FormField, Loader } from "../components";
import { getRandomPrompt } from "../utils/index";
import { imgPlaceholder } from "../assets";

const CreateImg = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImg = async (e) => {
    e.preventDefault();

    if (form.prompt && form.name) {
      try {
        setGeneratingImg(true);
        const response = await fetch(`${URL}/api/v1/dalle`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        console.log(error);
        alert("Error at generating img client side");
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert(" Please Enter Your Name and a Prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(`${URL}/api/v1/post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        await response.json();
        navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please generate an image First");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-4xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Create cool ilustration image through Dall-E Ai
        </p>
      </div>

      <form
        className="mt-16 flex flex-col text-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col  gap-5 ">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="Asep Prikitiw"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="an armchair in the shape of an avocado"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 w-[70vw] sm:w-[50vw] p-3 h-[70vw] sm:h-[50vw] flex justify-center items-center ">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <>
                <img
                  src={imgPlaceholder}
                  alt="preview"
                  className="w-9/12 h-9/12 object-contain opacity-40"
                />
                {generatingImg && (
                  <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <Loader />
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="mt-5 gap-5">
          <button
            type="button"
            onClick={generateImg}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center "
          >
            {generatingImg ? "Generating..." : "Generate Image"}
          </button>
        </div>

        <div className="mt-10 flex flex-col items-center ">
          <p className="mt-2 text-[#666] text-[14px] ">
            once you generated the image you want, you can share it in the
            community
          </p>
          <button
            type="submit"
            // onClick={generateImg}
            className=" mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center "
          >
            {loading ? <Loader /> : "Post To Community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateImg;

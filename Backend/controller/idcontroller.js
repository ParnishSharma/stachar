export const createIdController = async (req, res) => {
  try {
    // Check if req.fields exists before destrcturing
    if (!req.fields) {
      return res.status(400).send({ error: "Fields are missing in the request" });
    }

    const { name } = req.fields;
    const { photo } = req.files;

    // Validation
    switch (true) {
      case !name:
        return res.status(400).send({ error: "Name is Required" });
      case photo && photo.size > 1000000:
        return res.status(400).send({ error: "Photo is Required and should be less than 1MB" });
    }

    const products = new productModel({ ...req.fields, slug: slugify(name) });

    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }

    await products.save();

    res.status(201).send({
      success: true,
      message: "ID uploaded successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in uploading ID",
    });
  }
};

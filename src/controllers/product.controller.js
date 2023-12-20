import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class ProductController {

  async getAllProducts(req, res) {
    try {
      const products = await prisma.products.findMany();
      res.json(products);
    } catch(error) {
      console.error("error fatcheng products", error);
      res.status(500).send("internal server error");
    }
  }

  async getProductById(req, res) {
    const productId = parseInt(req.params.id);

    try {
      const product = await prisma.products.findUnique({
        where: { id: productId },
      });

      if (product) {
        res.json(product);
      } else {
        res.status(404).send('Product not found');
      }
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async createProduct (req, res) {
    const { title, description, price, category } = req.body;
    try {
      const newProduct = await prisma.products.create({
        data: {
          title,
          description,
          price,
          category,
        },
      });
      res.json(newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async updateProductById (req, res) {
    const productId = parseInt(req.params.id);
    const { title, description, price, category } = req.body;

    try {
      const updatedProduct = await prisma.products.update({
        where: { id: productId },
        data: {
          title,
          description,
          price,
          category,
        },
      });

      res.json(updatedProduct);
    } catch (error) {
      console.error('Error updating product by ID:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async deleteProductById (req, res) {
    const productId = parseInt(req.params.id);

    try {
      await prisma.products.delete({
        where: { id: productId },
      });

      res.send('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product by ID:', error);
      res.status(500).send('Internal Server Error');
    }
  }
};

export default new ProductController();

import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Property Details</h1>
          <p className="text-muted-foreground mb-8">
            Property details for: {slug}
          </p>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Project Information</h2>
            <p className="text-muted-foreground">
              This page will display detailed information about the selected property.
              The project slug is: {slug}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
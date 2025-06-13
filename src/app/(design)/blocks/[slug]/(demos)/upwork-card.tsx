import FreelancerCard from "@/components/upwork-freelance-product-card";

export const UpworkFreelanceProductCard = {
  name: "upwork-freelance-product-card",
  components: {
    Default: (
      <FreelancerCard
        avatarUrl={undefined} // Changed from null to undefined to avoid type error
        name="Natalia C."
        location="Bariloche, Argentina"
        jobSuccess={99}
        jobsCount={41}
        hourlyRate={75}
        title="Illustrator / Graphic Designer"
        skills={[
          "Adobe Photoshop",
          "Illustration",
          "Adobe Illustrator",
          "Mobile iOS",
        ]}
        isAvailableNow={true}
        isFavorite={true}
      />
    ),
  },
};

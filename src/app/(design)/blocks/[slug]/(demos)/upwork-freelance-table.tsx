import {
  ContractRow,
  type ContractProps,
} from "@/components/upwork/freelance-table";

const contractsData: ContractProps[] = [
  {
    avatarSrc: "/woman-portrait.png",
    avatarFallback: "KG",
    title: "UX Web Design Expert for PSD Website Graphic designer",
    name: "Kim Green",
    status: "Active contract",
    startDate: "Started Jul 14",
    activity: "Time logged this week: 1:30 hrs ($35.00)",
    lastActive: 'Last active 3 hours ago on "Create brochure designs f..."',
    actionButtonText: "See contract",
  },
  {
    avatarSrc: "/woman-profile.png",
    avatarFallback: "AA",
    title: "UX Web Design Expert for PSD Website Graphic...",
    name: "Angela Anderson",
    status: "Active contract",
    startDate: "Started Jul 14",
    activity: "Active: Create initial low-fi wireframes",
    lastActive: null,
    actionButtonText: "Pay now",
  },
  {
    avatarSrc: "/professional-woman.png",
    avatarFallback: "FW",
    title: "Customer Support Representative with Zendesk Experience",
    name: "Frances White",
    status: "Active contract",
    startDate: "Started Jul 14",
    activity: "Time logged this week: 4:20 hrs ($122.00)",
    lastActive: 'Last active 1 hour ago on "Initial scoping of the project".',
    actionButtonText: "See contract",
  },
  {
    avatarSrc: "/thoughtful-man-portrait.png",
    avatarFallback: "NM",
    title: "Python Developer for Data Automation Project",
    name: "Naeem Moore",
    status: "Active contract",
    startDate: "Started Jul 14",
    activity: "Time logged this week: 2:30 hrs ($49.00)",
    lastActive: 'Last active 2 days ago on "JIRA GFT342996000034".',
    actionButtonText: "See contract",
  },
];

export function ContractList() {
  return (
    <div className="bg-card rounded-lg border shadow-sm">
      <div className="divide-y divide-border">
        {contractsData.map((contract, index) => (
          <ContractRow key={index} {...contract} />
        ))}
      </div>
    </div>
  );
}

export const UpworkFreelanceTable = {
  name: "freelance-table",
  components: {
    Default: <ContractList />,
  },
};

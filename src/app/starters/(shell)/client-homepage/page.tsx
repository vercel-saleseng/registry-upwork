import "@/app/tokens.css";
import UpworkClientTopnav from "@/components/upwork/client-topnav";
import { ContractRow } from "@/components/upwork/freelance-table";
import FreelancerCard from "@/components/upwork/freelance-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Grid3X3,
  List,
  RefreshCw,
  ArrowUpDown,
} from "lucide-react";

export default function ClientHomepage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top Navigation */}
      <UpworkClientTopnav />

      {/* Main Content */}
      <main className="flex-grow w-full px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Good afternoon, [Fname]</h1>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              + Post a job
            </Button>
          </div>

          {/* Overview Section */}
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Overview</h2>
              <Button
                variant="link"
                className="text-primary hover:text-primary/80"
              >
                View all contracts →
              </Button>
            </div>

            {/* Filtering Controls */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2">
                <Badge
                  variant="outline"
                  className="px-3 py-1 border-border text-muted-foreground"
                >
                  Open job posts (0)
                </Badge>
                <Badge
                  variant="default"
                  className="px-3 py-1 bg-muted text-muted-foreground"
                >
                  Active contracts (4)
                </Badge>
              </div>

              <div className="flex gap-2 items-center">
                {/* Priority Filter */}
                <Button
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 border-border text-foreground"
                >
                  <ArrowUpDown className="h-4 w-4" />
                  Priority first
                  <ChevronDown className="h-4 w-4" />
                </Button>

                {/* View Toggle */}
                <div className="flex border border-border rounded-lg overflow-hidden">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 border-r border-border text-muted-foreground hover:text-foreground"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 bg-muted text-foreground"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg divide-y divide-border">
              <ContractRow
                avatarSrc="/path/to/avatar1.jpg"
                avatarFallback="KG"
                title="UX Web Design Expert for PSD Website Graphic designer"
                name="Kim Green"
                status="Active contract"
                startDate="Started Jul 14"
                activity="Time logged this week: 1:30 hrs ($35.00)"
                lastActive="Last active 3 hours ago on 'Create brochure design'"
                actionButtonText="See contract"
              />
              <ContractRow
                avatarSrc="/path/to/avatar2.jpg"
                avatarFallback="JA"
                title="UX Web Design Expert for PSD Website Graphic..."
                name="Jugesh Anderson"
                status="Active contract"
                startDate="Started Jul 14"
                activity="Active: Create initial low-fi wireframes"
                lastActive=""
                actionButtonText="Pay now"
              />
              <ContractRow
                avatarSrc="/path/to/avatar3.jpg"
                avatarFallback="FW"
                title="Customer Support Representative with Zendesk Experience"
                name="Frances White"
                status="Active contract"
                startDate="Started Jul 14"
                activity="Time logged this week: 4:20 hrs ($132.00)"
                lastActive="Last active 1 hour ago on 'Initial scoping of the project'"
                actionButtonText="See contract"
              />
              <ContractRow
                avatarSrc="/path/to/avatar4.jpg"
                avatarFallback="NM"
                title="Python Developer for Data Automation Project"
                name="Naeem Moore"
                status="Active contract"
                startDate="Started Jul 14"
                activity="Time logged this week: 2:30 hrs ($49.00)"
                lastActive="Last active 2 days ago on 'DRA GFT3429960000034'"
                actionButtonText="See contract"
              />
            </div>
          </section>

          {/* Work Together Section */}
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Work together again on something new
              </h2>
              <Button
                variant="link"
                className="text-primary hover:text-primary/80"
              >
                View all hires →
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FreelancerCard
                avatarUrl="/path/to/avatar.jpg"
                name="Natalia C."
                location="Bariloche, Argentina"
                jobSuccess={99}
                jobsCount={41}
                hourlyRate={75}
                title="Illustrator / Graphic Designer"
                skills={["Adobe Photoshop", "Illustration", "Mobile iOS"]}
                isAvailableNow={true}
                isFavorite={false}
                lastContract="Saas Landing Pages and Website Design Workflow Development"
                buttonText="Rehire"
                buttonVariant="rehire"
              />
              <FreelancerCard
                avatarUrl="/path/to/avatar2.jpg"
                name="Alejandro B."
                location="United Kingdom"
                jobSuccess={99}
                jobsCount={41}
                hourlyRate={75}
                title="Graphic Designer, Logo & Branding / Packaging / Print / Web"
                skills={["Logo design", "Adobe InDesign", "Infographic"]}
                isAvailableNow={true}
                isFavorite={false}
                lastContract="Saas Landing Pages and Website Design Workflow Development"
                buttonText="Rehire"
                buttonVariant="rehire"
              />
              <FreelancerCard
                avatarUrl="/path/to/avatar3.jpg"
                name="Marl G."
                location="San Francisco, US"
                jobSuccess={99}
                jobsCount={41}
                hourlyRate={75}
                title="Experienced and Creative Graphic Designer"
                skills={[
                  "Financial Presentation",
                  "Powerpoint",
                  "Adobe Illustrator",
                ]}
                isAvailableNow={true}
                isFavorite={false}
                lastContract="Saas Landing Pages and Website Design Workflow Development"
                buttonText="Rehire"
                buttonVariant="rehire"
              />
              <FreelancerCard
                avatarUrl="/path/to/avatar4.jpg"
                name="Naeem D."
                location="San Francisco, US"
                jobSuccess={99}
                jobsCount={41}
                hourlyRate={75}
                title="Experienced and Creative Graphic Designer"
                skills={[
                  "Financial Presentation",
                  "Powerpoint",
                  "Adobe Illustrator",
                ]}
                isAvailableNow={true}
                isFavorite={false}
                lastContract="Saas Landing Pages and Website Design Workflow Development"
                buttonText="Rehire"
                buttonVariant="rehire"
              />
            </div>
          </section>

          {/* Personalized Talent Section */}
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                Personalized talent
                <span className="text-muted-foreground">ⓘ</span>
              </h2>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 hover:bg-primary/10 px-0"
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/80"
                >
                  Browse talent →
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FreelancerCard
                avatarUrl="/path/to/avatar5.jpg"
                name="Natalia C."
                location="Bariloche, Argentina"
                jobSuccess={99}
                jobsCount={41}
                hourlyRate={75}
                title="Illustrator / Graphic Designer"
                skills={["Adobe Photoshop", "Illustration", "Mobile UI"]}
                isAvailableNow={true}
                isFavorite={true}
                buttonText="Invite to job"
                buttonVariant="invite"
              />
              <FreelancerCard
                avatarUrl="/path/to/avatar6.jpg"
                name="Alejandro B."
                location="United Kingdom"
                jobSuccess={99}
                jobsCount={41}
                hourlyRate={75}
                title="Graphic Designer, Logo & Branding / Packaging / Print / Web"
                skills={["Logo design", "Adobe InDesign", "Infographic"]}
                isAvailableNow={true}
                isFavorite={true}
                buttonText="Invite to job"
                buttonVariant="invite"
              />
              <FreelancerCard
                avatarUrl="/path/to/avatar7.jpg"
                name="Marl G."
                location="San Francisco, US"
                jobSuccess={99}
                jobsCount={41}
                hourlyRate={75}
                title="Experienced and Creative Graphic Designer"
                skills={[
                  "Financial Presentation",
                  "Powerpoint",
                  "Adobe Illustrator",
                ]}
                isAvailableNow={true}
                isFavorite={true}
                buttonText="Invite to job"
                buttonVariant="invite"
              />
              <FreelancerCard
                avatarUrl="/path/to/avatar8.jpg"
                name="Marl G."
                location="San Francisco, US"
                jobSuccess={99}
                jobsCount={41}
                hourlyRate={75}
                title="Experienced and Creative Graphic Designer"
                skills={[
                  "Financial Presentation",
                  "Powerpoint",
                  "Adobe Illustrator",
                ]}
                isAvailableNow={true}
                isFavorite={true}
                buttonText="Invite to job"
                buttonVariant="invite"
              />
            </div>
          </section>

          {/* Help and Resources Section */}
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Help and resources</h2>
              <Button
                variant="link"
                className="text-primary hover:text-primary/80"
              >
                View all resources →
              </Button>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Upwork's Help
                  </p>
                  <h3 className="font-semibold text-lg mb-2">
                    Browse help articles by category
                  </h3>
                  <Button
                    variant="outline"
                    className="text-primary border-primary hover:bg-primary/10"
                  >
                    Learn more
                  </Button>
                </div>
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Trust & safety
                    </p>
                    <h4 className="font-semibold">
                      Continue working with talent you trust
                    </h4>
                  </div>
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🛡️</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Manage your project
                    </p>
                    <h4 className="font-semibold">
                      Impressed by talent? Learn about bonuses
                    </h4>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📈</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Announcements
                    </p>
                    <h4 className="font-semibold">Check out what's new</h4>
                  </div>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-xl">📢</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">About Us</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-background">
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-background">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Trust, Safety & Security</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-background">
                      Help & Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-background">
                      Upwork Foundation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Terms of Service</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-background">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-background">
                      Accessibility
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Desktop App</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-background">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-background">
                      Enterprise Solutions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-muted pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <span className="text-sm">Follow us</span>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80"
                    >
                      <span className="text-sm">f</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80"
                    >
                      <span className="text-sm">in</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80"
                    >
                      <span className="text-sm">t</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80"
                    >
                      <span className="text-sm">yt</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80"
                    >
                      <span className="text-sm">ig</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-sm">Mobile app</span>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80"
                    >
                      <span className="text-xs">📱</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80"
                    >
                      <span className="text-xs">🍎</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 text-sm text-muted-foreground">
                © 2015 - 2024 Upwork® Global Inc.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

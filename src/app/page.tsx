import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import FeaturedCourses from "@/components/FeaturedCourses";
import styles from "./page.module.css";
import ExploreTopics from "@/components/ExploreTopics";
import LearnerOutcomes from "@/components/LearnerOutcomes";
import CommunityExperts from "@/components/CommunityExperts";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className={styles.setFeatureCard}>
        <FeatureCards />
      </div>
      <FeaturedCourses />
      <ExploreTopics />
      <LearnerOutcomes />
      <CommunityExperts />
    </div>
  );
}

import React from "react";
import AboutModal from "../../components/modals/aboutModal";
import ContactModal from "../../components/modals/ContactModal";
import ProjectsModal from "../../components/modals/projectsModal";
import { useRouter } from "next/router";

export default function homepageModal() {
  const router = useRouter();
  const { homepageModal } = router.query;
  return <div>This is the {homepageModal} modal</div>;
}

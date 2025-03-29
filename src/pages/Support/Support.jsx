import { IoIosMail } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";

import SupportCard from "./components/SupportCard";
import { IoChatbubblesOutline } from "react-icons/io5";
import { InfoCard } from "../Dashboard/components/InfoCard";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <SupportCard
        leftIcon={<IoIosMail />}
        LeftHead={"Contact Us"}
        LeftText={`Have a question or just want to know more? 
              Feel free to reach out to us.`}
        rightComponent={<ContactCard />}
      />
      <SupportCard
        leftIcon={<IoChatbubblesOutline />}
        LeftHead={"Live Chat"}
        LeftText={"Don't have time to wait for the answer? Chat with us now."}
        rightComponent={
          <InfoCard title="contact" img="url(Shape2.png)" inverted />
        }
      />
    </DashboardLayout>
  );
};

export default Support;

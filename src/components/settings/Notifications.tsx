import { useState, FC } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

interface NotificationsState {
	push: boolean;
	email: boolean;
	sms: boolean;
}

const Notifications: FC = () => {
	const [notifications, setNotifications] = useState<NotificationsState>({
		push: true,
		email: false,
		sms: true,
	});

	return (
		<SettingSection icon={Bell} title={"Notifications"}>
			<ToggleSwitch
				label={"Push Notifications"}
				isOn={notifications.push}
				onToggle={() =>
					setNotifications((prevState) => ({ ...prevState, push: !prevState.push }))
				}
			/>
			<ToggleSwitch
				label={"Email Notifications"}
				isOn={notifications.email}
				onToggle={() =>
					setNotifications((prevState) => ({ ...prevState, email: !prevState.email }))
				}
			/>
			<ToggleSwitch
				label={"SMS Notifications"}
				isOn={notifications.sms}
				onToggle={() =>
					setNotifications((prevState) => ({ ...prevState, sms: !prevState.sms }))
				}
			/>
		</SettingSection>
	);
};

export default Notifications;

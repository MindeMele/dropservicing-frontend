"use client";
import { FacebookProvider, CustomChat } from "react-facebook";
import React from "react";

const FacebookMsg = () => {
	return (
		<>
			<FacebookProvider appId='1062190191863272' chatSupport>
				<CustomChat pageId='198397873349102' minimized={true} />
			</FacebookProvider>
		</>
	);
};

export default FacebookMsg;

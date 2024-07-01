"use server";
import React from "react";
import { fetchTags } from "@/app/admin/_actions/tag";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const TagCheckBox = async () => {
    const tags = await fetchTags();

    console.log(tags);

    return <></>;
};

export default TagCheckBox;

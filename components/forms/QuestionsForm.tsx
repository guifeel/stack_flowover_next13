"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { QuestionSchema } from "@/lib/validations";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const QuestionsForm = () => {
  const editorRef = useRef(null);

  const form = useForm<z.infer<typeof QuestionSchema>>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof QuestionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-10">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                用户名<span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="no-focus paragraph-regular background-light700_dark300 text-dark300_light700 light-border-2 min-h-[56px] border">
                <Input placeholder="请输入用户名" {...field} />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                这里用于输入用户名.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                问题描述<span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="no-focus paragraph-regular background-light700_dark300 text-dark300_light700 light-border-2 min-h-[56px] border">
                {/* TODO:这里应该是文本标签 */}
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) => {
                    // @ts-ignore
                    editorRef.current = editor;
                  }}
                  initialValue=""
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "codesample",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                    ],
                    toolbar:
                      "undo redo | " +
                      "codesample bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist",
                    content_style: "body { font-family:Inter; font-size:16px }",
                  }}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                假设你正在向别人进行提问.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                标签<span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="no-focus paragraph-regular background-light700_dark300 text-dark300_light700 light-border-2 min-h-[56px] border">
                <Input placeholder="请输入标签" {...field} />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                问题相关联的标签.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default QuestionsForm;

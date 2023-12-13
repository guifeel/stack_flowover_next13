import { z } from "zod";

export const QuestionSchema = z.object({
  username: z.string().min(2, "长度不能少于2个字符").max(130),
  explanation: z.string().max(130),
  tags: z.array(z.string().min(2).max(15)).min(1).max(3),
});

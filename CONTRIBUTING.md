_This document is a work in progress. If anything about the guidelines below doesn't make sense, please trust your judgement and do what's sensible. But also open an issue or PR in this repo so this document can be improved – your help in building and expanding this document is very much welcome!_

## Identifying and Logging Curriculum Problems

If you come across any curriculum problems, please open an issue in this repo. Curriculum problems may include: 
- unclear, incomplete, misleading, incorrect or missing instructions or information; 
- bugs in Compass, exercise or project starter code; 
- learning outcomes that are not being addressed but that you believe should be; - student feedback or your own observations from lectures, 
- notes on where students are getting stuck or confused; 
- topics or concepts that we're not teaching effectively and/or efficiently; 
- typos

To help curriculum developers find and prioritize work, please give any issues you open a clear title describing the problem, and (if it makes sense) include in the title the week and the day where the problem occurs.

For example, good issue titles might be "[w2d1] Add visual example of text-decoration" or "[w3d2] Add Parallax Effect - unclear, missing example output".

All issues should include a detailed description of your proposed change, a link to the to the activity in Compass, the motivation for the change and any alternatives considered. Please note we may close this issue or ask you to create a pull-request if this is not something we see as sufficiently high priority.

_Note: If the issue you've found is a typo or a problem that can be fixed quickly with minimal changes, feel free to skip the issue creation process and open a PR directly._

## Issue Priority

Within 5-7 days of you opening an issue, a member of the curriculum team will assign it a priority label. If no priority label has been assigned, it means it's a low priority issue.

An issue is high priority if one or more of the following is true about the problem it describes:

- activity instructions are wrong (that is, they're teaching students something incorrect, asking them to do something out of reach or impossible, or are inconsistent with previous or future instructions)
- activity/lecture is out of place/redundant, serves as a distraction for students, or misses an important learning opportunity
- learning outcomes are not being addressed/met
- fixing the problem will avoid (or lessen the need for) repeated mentor interactions with students (that is, if you find yourself explaining the same thing to many students, that explanation should be in the curriculum)

However, if the problem raised is in a stretch activity, it may not be high priority since not all students will encounter it.

## Working on Curriculum

### Setup

[Fork](https://help.github.com/articles/fork-a-repo/) this repo, clone that fork, then run the following commands.

```
npm install
npm start
``` 

The node app will serve the curriculum content on localhost, port 5000.

Please ensure that your code editor respects the `.editorconfig` file in this repo. (See [EditorConfig.org](http://editorconfig.org/) for more details).

### Making Changes to Curriculum

#### Working on `ready-to-implement` issues

Some issues in this repo have the `ready-to-implement` label applied to them, which means their budget is pre-approved. And as long as they've got nobody already assigned to them, you can pick any you'd like to work on!

These issues also have a time estimate label applied to them, which are as follows.

| label | estimate |
| ----- | -------- |
| `quick` | < 1 hour |
| `small` | 1 - 3 hours |
| `large` | 3 - 6 hours |
| `epic` | 6+ hours |

You can find all the issues that are ready to be worked on [here](https://github.com/lighthouse-labs/web-pt-frontend-curriculum/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Aready-to-implement).

If there's an issue you'd like to fix and it's not assigned to anyone else:

1. Assign the issue to yourself. If you can't assign issues to yourself, leave a comment on the issue so others know you're working on it, and an admin will formally assign the issue to you later.

2. Keep track of the time you spend working on the issue, and bill for it in Clocktower (under **Curriculum Development** in the first drop-down from the left, and under **Front-End Fundamentals Curriculum** in the second drop-down from the left). Be sure to log the *actual* time you worked on the issue, not the estimate.

3. If it's looking like the estimate is way too optimistic and you're going to need *lots* more time to fix the issue, please reach out to Amy Mansell with your new time estimate before billing any more time for the issue. (The best way to reach Amy is on Slack).

4. Once you've fixed the issue, or you've got some work you'd like feedback on before continuing, open a PR in this repo! (See below for more info).

#### Working on other issues

If there's an issue you'd like to work on that does not have the `ready-to-implement` label on it, you'll need LHL approval before you get started on it (due to budget constraints). Please get in touch with [@notadeejay](https://github.com/notadeejay) so budget can be set aside for your work.

_Note: If you're a full-time LHL employee the budgeting doesn't apply to you. If there's an issue you'd like to fix, please do! Do assign yourself to it, however, to avoid any potential duplicate work._

#### Opening Pull Requests

After you've completed any curriculum work, please open a PR in this repo. Make sure that your work follows the [activity styleguide](https://github.com/lighthouse-labs/web-pt-frontend-curriculum/wiki/Markdown-Style-Guide) defined in this repo.

A member of the curriculum team will then review your PR before merging. Keep in mind that many who work on this curriculum are part-time employees, so if a change needs to be in before the Monday of an upcoming week, try to open the PR no later than the previous Wednesday to allow time for reviews and any necessary modifications before merging and deploying to Compass.

### Activity Templates

Use the following [template](https://github.com/lighthouse-labs/web-pt-frontend-curriculum/wiki/How-to-Create-an-Activity) to create an initial outline for the assignment and refer to it as much as you need to when building the assignment. You will be using markdown for everything so make sure to check out the [markdown style guide](https://github.com/lighthouse-labs/web-pt-frontend-curriculum/wiki/Markdown-Style-Guide).
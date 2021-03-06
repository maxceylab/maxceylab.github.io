let CDSet = chance1.shuffle(repmat(perm_concat([0,1],counter(1,25)),4)); // randomized 200 CD trials

let Cats = chance1.shuffle([01,04,07,08,10,11,12,13,14,15,17,18,02,09,16]);

// ensure that RPCats does not contain any category that has less than 18 exemplars
while (Cats.slice(0,5).includes(02) || Cats.slice(0,5).includes(09) || Cats.slice(0,5).includes(16)) {
  Cats = chance1.shuffle([01,04,07,08,10,11,12,13,14,15,17,18,02,09,16]);
}

let RpCats = Cats.slice(0,5); // 5 categories
let NrpCats = Cats.slice(5,10); // 5 categories
let ForgetCats = Cats.slice(10,15); // 5 categories

let RpExemSlice = chance1.shuffle(counter(11, 28));
let RpPlusExem = RpExemSlice.slice(0, 3); //type 0
let RpMinusExem = RpExemSlice.slice(3, 6); //type 1
let PracLuresExem = RpExemSlice.slice(6, 12); //type 3
let RpTestLuresExem = RpExemSlice.slice(12, 18); //type 4
let NrpExemSlice = chance1.shuffle(counter(11, 22));
let NrpExem = NrpExemSlice.slice(0, 6); //type 2
let NrpTestLuresExem = NrpExemSlice.slice(6, 12); //type 5
let ForgetExemSlice = chance1.shuffle(counter(11,22))
let ForgetExem = NrpExemSlice.slice(0, 6); //type 6
let ForgetLuresExem = NrpExemSlice.slice(6, 12); //type 7

let StudyTrialType = [];
StudyTrialType = StudyTrialType.concat(repmat(repmat([0, 1], RpPlusExem.length), RpCats.length), repmat(repmat(2, NrpExem.length), NrpCats.length), repmat(repmat(6, ForgetExem.length), ForgetCats.length));
StudyTrialType = chance1.shuffle(StudyTrialType);
let PracTrialType = [];
PracTrialType = PracTrialType.concat(repmat(repmat(0, RpPlusExem.length), RpCats.length), repmat(repmat(0, RpPlusExem.length), RpCats.length), repmat(repmat(3, PracLuresExem.length), RpCats.length));
PracTrialType = chance1.shuffle(PracTrialType);
let TestTrialType = [];
TestTrialType = TestTrialType.concat(repmat(repmat([0, 1], RpPlusExem.length), RpCats.length),
  repmat(repmat(2, NrpExem.length), NrpCats.length), repmat(repmat(4, RpTestLuresExem.length),
    RpCats.length), repmat(repmat(5, NrpTestLuresExem.length), NrpCats.length),
  repmat(repmat(6, ForgetExem.length), ForgetCats.length), repmat(repmat(7, ForgetLuresExem.length), ForgetCats.length));
TestTrialType = chance1.shuffle(TestTrialType);

let RpPlus = chance1.shuffle(perm_concat(RpCats,RpPlusExem));
let RpPlusPrac = [];
RpPlusPrac = RpPlusPrac.concat(chance1.shuffle(perm_concat(RpCats,RpPlusExem)),chance1.shuffle(perm_concat(RpCats,RpPlusExem))); //twice because of two practice trials
let RpMinus = chance1.shuffle(perm_concat(RpCats,RpMinusExem));
let Nrp = chance1.shuffle(perm_concat(NrpCats,NrpExem));
let PracLures = chance1.shuffle(perm_concat(RpCats,PracLuresExem));
let RpTestLures = chance1.shuffle(perm_concat(RpCats,RpTestLuresExem));
let NrpTestLures = chance1.shuffle(perm_concat(NrpCats,NrpTestLuresExem));
let Forget = chance1.shuffle(perm_concat(ForgetCats,ForgetExem));
let ForgetLures = chance1.shuffle(perm_concat(ForgetCats,ForgetLuresExem));
let AllImages = [];
AllImages = AllImages.concat(RpPlus,RpMinus,Nrp,PracLures,RpTestLures,NrpTestLures,Forget,ForgetLures);

let RpPlus_StudyOrder = [];
let RpMinus_StudyOrder = [];
let Nrp_StudyOrder = [];
let Forget_StudyOrder = [];

function repmat(array, count) {
  let result = [];
  while (count--) {
    result = result.concat(array);
  }
  return result;
}

function counter(start, end, interval) {
  if (interval == undefined) {
    interval = 1;
  }
  let result = [];
  if (start > end) {
    start = start - 360;
  }
  while (start <= end) {
    result = result.concat(start);
    start = start + interval;
  }
  return result;
}

function perm_concat(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] < 10) {
        result = result.concat('0' + array1[i].toString() + '_' + array2[j].toString());
      } else {
        result = result.concat(array1[i].toString() + '_' + array2[j].toString());
      }
    }
  }
  return result;
}

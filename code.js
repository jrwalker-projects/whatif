float i,s,e;
for(vec3 p,q,d=vec3((FC.xy-.5*r)/r.y,-1);i++<1e2;e=length(p)/s){
p=q+=i<50.?d*e:p-p+1e-4+e;p.z+=7.;
o+=sqrt(e)/70.;
p.xz*=rotate2D(t/8.);
p=vec3(log(s=length(p)),atan(p.y,p.x),sin(t/4.+p.z/s));
s=1.;
for(int j;j++<6;)
s*=e=PI/min(dot(p,p),.8),p=abs(p)*e-3.,p.y-=round(p.y);
}
